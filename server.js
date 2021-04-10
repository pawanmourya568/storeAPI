const express= require('express')
const app = express()
const ejs = require('ejs')
const path=require('path')
const expresslayout = require('express-ejs-layouts')
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('express-flash')
const passport = require('passport')

const apiRouter = require('./routes/api')
const webRouter = require('./routes/web')

const PORT = process.env.PORT || 3000


// Database Connection
const url = 'mongodb://localhost/test';
mongoose.connect(url,{useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true,useFindAndModify:true});



// Session config
app.use(session({
    secret: 'hello',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 24 hour
}))

// Passport config
const passportInit = require('./http/config/passport')
passportInit(passport)
app.use(passport.initialize())
app.use(passport.session())

// Global middleware
app.use((req, res, next) => {
    res.locals.session = req.session
    res.locals.user = req.user
    next()
})
app.use(flash())


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// set templare engine
app.use(expresslayout)
app.set('views',path.join(__dirname,'./views'))
app.set('view engine', 'ejs')

app.use('/',webRouter)
app.use('/',apiRouter)




app.listen(PORT, () => {
    console.log(`listning on port ${PORT}`)
})