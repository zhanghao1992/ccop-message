const express = require('express')
const multer = require('multer')
const vService = require('../lib/vService')
const session = require('../lib/session')
const router = express.Router()
const upload = multer()
const NodeRSA = require('node-rsa')

// 获取图形验证码
router.get('/captcha', (req, res) => {
  // console.log(req.session.captcha)
  vService.post(req, res, {path: `/captcha/createCaptcha?_=${new Date().getTime()}`}, (json) => {
    if (json.code === 0) {
      req.session.captcha = {
        value: json.response.token,
        createTime: new Date().getTime(),
        privateKey: (req.session.captcha && req.session.captcha.privateKey) || '',
        puplicKey: (req.session.captcha && req.session.captcha.puplicKey) || ''
      }
      // 设置公钥私钥
      if (!req.session.captcha.privateKey) {
        const key = new NodeRSA({b: 1024}, {signingScheme: 'pkcs1'})
        const publicDer = key.exportKey('pkcs8-public-der').toString('base64')
        const privateDer = key.exportKey('pkcs1').toString('base64')
        req.session.captcha.privateKey = privateDer
        req.session.captcha.puplicKey = publicDer
      }
      // new Buffer()弃用
      // res.end(new Buffer(json.response.base64String, 'base64').toString('binary'), 'binary')
      res.end(Buffer.from(json.response.base64String, 'base64').toString('binary'), 'binary')
    } else {
      res.json(json)
    }
  })
})

// 获取图片
router.get('/getFile', (req, res) => {
  vService.get(req, res, {path: '/admin/getFileInfo'}, (json) => {
    // console.log('获取图片成功！')
    res.send(json)
  })
})

// 上传
router.post('/upload', upload.single('file'), (req, res) => {
  // console.log(req.file)
  const fileData = {
    contentType: req.file.mimetype,
    base64String: req.file.buffer.toString('base64'),
    fileName: req.file.originalname,
    suffix: req.file.originalname.substring(req.file.originalname.lastIndexOf('.') + 1),
    size: req.file.size
  }
  vService.post(req, res, {
    path: '/admin/uploadFile',
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // },
    data: fileData
  }, (json) => {
    // console.log('上传图片成功！')
    res.json({
      code: 0,
      response: {fileName: json.response.fileName, fileMD5: json.response.fileMD5}
    })
  })
})

// 登录
router.post('/login', (req, res) => {
  var captchaResult = captcha.check(req, req.body.ruleForm.encryptedCaptcha)
  if (captchaResult.code === 0) {
    // console.log(req.session)
    // console.log(req.body.ruleForm)
    req.session.user = {
      'id': 1,
      'username': 'fc12',
      'password': '1328-67-109-1871-17-2933-445875361475-51877559-39-22-786122-119-126-30106-405636124',
      'status': null,
      'createTime': new Date().getTime(),
      'type': ''
    }
    req.session.user.type = 'admin'
    session.login(req)
    // store.state.user = userInfo
    res.json({
      code: 0,
      msg: '登陆成功',
      response: {}
    })
  } else {
    res.send(JSON.stringify(captchaResult))
  }
})
// 退出
router.post('/exit', (req, res) => {
  session.logout(req)
  res.send(JSON.stringify({code: 0, msg: '退出成功！'}))
})

// 获取session
router.get('/getSession', (req, res) => {
  res.json({
    code: 0,
    response: {
      session: req.session,
      sessionID: req.sessionID
    }
  })
})// 获取puplicKey
router.get('/getPuplicKey', (req, res) => {
  // console.log(req.session)
  res.json({
    code: 0,
    response: {
      puplicKey: (req.session.captcha && req.session.captcha.puplicKey) || ''
    }
  })
})
module.exports = router
