const axios = require('axios')
const qs = require('qs')
const session = require('./session')

module.exports = {
  debug: true,
  getUrl(option) {
    if (option.url) {
      console.log(option.url)
      return option.url
    } else {
      return 'http://172.21.120.207:18161'
    }
  },
  getUserId(req) {
    if (req.session.user && req.session.user.id) {
      return req.session.user.id
    } else {
      return ''
    }
  },
  get(req, res, option, callback) {
    let me = this
    axios.get(`${me.getUrl(option)}${option.path}`, {
      params: req.query
    }).then(json => {
      callback(json.data)
    }).catch(() => {
      res.json({code: -1})
    })
  },
  post(req, res, option, callback) {
    let me = this
    let dataObject = {}
    if (req.method === 'GET') {
      if (option.data) {
        dataObject = Object.assign({}, req.query, option.data)
      } else {
        dataObject = Object.assign({}, req.query)
      }
    } else {
      if (option.data) {
        dataObject = Object.assign({}, req.body, option.data)
      } else {
        dataObject = Object.assign({}, req.body)
      }
    }
    axios.post(`${me.getUrl(option)}${option.path}`, qs.stringify(dataObject), {
      // headers: {
      //   'Authorization': me.getUserId(req)
      // }
    }).then(json => {
      callback(json.data)
    }).catch((err) => {
      console.log(err)
      res.json({code: -1})
    })
  }
}
