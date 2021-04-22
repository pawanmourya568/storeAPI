const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
   username:String,
   Email:String,
   Password:String,
   Role:{ type: String, default: 'customer' }
},{timestamps:true})

module.exports = mongoose.model('users', userSchema)