const express= require('express')
const app = express()
const ejs = require('ejs')
const path=require('path')
const expresslayout = require('express-ejs-layouts')
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('express-flash')
const passport = require('passport')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const apiRouter = require('./routes/api')
const webRouter = require('./routes/web')
const auth = require('./http/middlewares/auth.js')
const router = require('./routes/api')

const PORT = process.env.PORT || 3000



// Database Connection
const url = process.env.mongoConnect
mongoose.connect(url,{useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true,useFindAndModify:true})
   .then(console.log('database connected sucessfully'));



// Session config
app.use(session({
    secret: 'hello',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 24 hour
}))


// Global middleware
app.use((req, res, next) => {
    res.locals.session = req.session
    res.locals.user = req.user
    next()
})
app.use(flash())

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// set templare engine
app.use(expresslayout)
app.set('views',path.join(__dirname,'./views'))
app.set('view engine', 'ejs')

app.use('/',webRouter)
app.use('/',apiRouter)

const createToken = async() => {
    const token = await jwt.sign({_id:"pawamikdn"}, "hellousers")
    // console.log(token)
}
createToken();

app.use((req, res, next) => {
    // res.locals.user=user;
    // res.locals.meals=meals;
    next()
})

app.listen(PORT, () => {
    console.log(`listning on port ${PORT}`)
})