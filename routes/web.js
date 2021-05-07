const userController = require('../http/conroller/userComtroller')
const authController = require('../http/conroller/authController')
const express = require('express')
const router = express.Router()
const User= require('../http/modles/users')
const auth = require('../http/middlewares/auth')
const AlreadyLogin = require('../http/middlewares/AlreadyLogin')

router.get('/',userController().index)
router.get('/aboutus',userController().aboutus)
router.get('/login',AlreadyLogin,authController().login)
router.post('/login',authController().postLogin)
router.get('/register',AlreadyLogin, authController().register)
router.post('/register',authController().postRegister)

router.get('/post',auth ,userController().postMenu)
router.get('/delete',auth ,userController().delete)
router.get('/update',auth ,userController().updateMenu)

router.get('/api',auth ,userController().api)
router.get('/logout', authController().logout)

module.exports = router