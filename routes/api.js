const apiController = require('../http/conroller/apiController')
const express = require('express')
const router = express.Router()

router.get('/',apiController().getMenuData)
router.post('/postMenu', apiController().postMenuData)
router.delete('/delete/:names',apiController().deleteMenuApi)
router.post('/delete',apiController().deleteMenu)
router.post('/updateMenu',apiController().updateMenu)

module.exports = router