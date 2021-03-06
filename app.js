const express = require('express')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const proxy = require('http-proxy-middleware')
const bodyParser = require('body-parser')
const config = {
  port: '9077',
  redis: false
}
// vue history模式
const history = require('connect-history-api-fallback')

// var connect = require('connect')
// var port = process.env.PORT || config.dev.port

global.projectRoot = __dirname
global.userSessionList = {}

const app = express()

const index = require('./src/api/index.js')
const common = require('./src/api/common/main.js')

var router = express.Router()

if (!config.redis) {
  app.use(session({
    secret: 'asd897238498374ksajdasd4fhfasjkgh',
    name: 'ccpc_apply_web',
    resave: true,// 刷新过期时间,
    rolling: true,// 刷新过期时间,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 8
    },
  }))
} else {
  app.use(session({
    secret: 'asd897238498374ksajdasd4fhfasjkgh',
    name: 'ccpc_apply_web',
    resave: true,// 刷新过期时间,
    rolling: true,// 刷新过期时间,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 8
    },
    store: new RedisStore({
      host: '10.9.38.250',
      port: '16700',
      pass: 'zcdDxfCTq3dO4lK1Ucmy'
    })
  }))
}
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({type: 'application/json'}))
app.use('/node', index)
app.use('/node_common', common)
app.use(history({
  rewrites: [
    {
      from: /^\/abc$/,
      to: '/'
    }
  ]
}))

router.get('/', function(req, res, next) {
  req.url = 'index.html'
  next()
})
app.use(router)

// 跨域代理
// var myProxy = proxy({
//   target: 'https://c.y.qq.com/',
//   headers: {
//     referer: 'https://y.qq.com/portal/playlist.html',
//     host: 'c.y.qq.com'
//   },
//   changeOrigin: true,
//   pathRewrite: {
//     '^/qq_music_api': '/'
//   }
// })
// app.use('/qq_music_api', myProxy)

app.use(express.static('./dist'))

module.exports = app.listen(config.port, function(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log(process.env.NODE_ENV)
  console.log('listening at http://localhost:' + config.port)
})
