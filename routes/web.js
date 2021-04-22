const userController = require('../http/conroller/userComtroller')
const authController = require('../http/conroller/authController')
const express = require('express')
const router = express.Router()
const User= require('../http/modles/users')
 
router.get('/home',userController().index)
router.get('/login',authController().login)
router.post('/login',authController().postLogin)

router.get('/register', authController().register)
router.post('/register', authController().postRegister)

router.get('/post', userController().postMenu)
router.get('/delete', userController().delete)

router.get('/update', userController().updateMenu)


router.get('/test',async (req,res)=>{
    const users =await User.find()
    console.log(users)
    res.send(users)
})
module.exports = router