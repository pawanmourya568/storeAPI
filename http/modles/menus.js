const mongoose = require('mongoose')

const menuSchema = mongoose.Schema({
    Sr_No: Number,
    Type :String,
    Meal: String,
    Discount: Number,
    Price: Number,
    Rating: Number
})

module.exports = mongoose.model('menus', menuSchema)