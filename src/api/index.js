var express = require('express')
var router = express.Router()
var captcha = require('./lib/captcha')
var session = require('./lib/session')
var vService = require('./lib/vService')

// 登录
router.post('/login', (req, res) => {
  var captchaResult = captcha.check(req, req.body.encryptedCaptcha)
  if (captchaResult.code === 0) {
    // console.log(req.session)
    // console.log(req.body.ruleForm)
    vService.post(req, res, {
      path: '/admin/login'
    }, json => {
      if (json.code === 0) {
        req.session.user = json.response
        req.session.user.type = 'admin'
        session.login(req)
      }
      res.json(json)
    })
  } else {
    res.send(JSON.stringify(captchaResult))
  }
})
// 退出
router.post('/exit', (req, res) => {
  // console.log(11)
  session.logout(req)
  res.send(JSON.stringify({code: 0, msg: '退出成功！'}))
})

router.get('/test', (req, res) => {
  // console.log(req.session)
  res.json({
    code: 0,
    msg: 'test success!',
    response: null
  })
})
module.exports = router
