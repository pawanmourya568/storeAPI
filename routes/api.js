const apiController = require('../http/conroller/apiController')
const express = require('express')
const router = express.Router()
const auth = require('../http/middlewares/auth')
const api =require('../http/middlewares/api')

router.get('/',api,apiController().getMenuData)
router.get('/',api,apiController(). getSpecificMenuData)
router.post('/postMenu',auth ,apiController().postMenuData)
router.delete('/delete/:names',api ,apiController().deleteMenuApi)
router.post('/delete',auth ,apiController().deleteMenu)
router.post('/updateMenu',auth ,apiController().updateMenu)

module.exports = router