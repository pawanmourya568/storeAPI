const userController = require('../http/conroller/userComtroller')
const authController = require('../http/conroller/authController')
const express = require('express')
const router = express.Router()

 
router.get('/home',userController().index)
router.get('/login',authController().login)
router.post('/login',authController().postLogin)

router.get('/register', authController().register)
router.post('/register', authController().postRegister)

router.get('/post', userController().postMenu)
router.get('/delete', userController().delete)

router.get('/update', userController().updateMenu)
module.exports = router