const User = require('../modles/users')
const bcrypt = require('bcrypt')
const users = require('../modles/users')
function authController() {
    return {
        login(req, res) {
            res.render('auth/login',{image:'images/login_Register.png'})
        },
        async postLogin(req, res, next) {
            const { Email, Password } = req.body
            User.findOne({Email},async (err,user)=> {
                
            if (user) {
                pass = user.Password
                const match = await bcrypt.compare(Password, pass)
                console.log(match)
                if (match) {
                    req.session.user=user;
                    return res.render('home',{user:user})
                }else{
                    return res.send({'error':'invalid Username or Password'})
                }
                }else{
                    return res.send({'error':'invalid Username'})
            }
            })
            
        },
        register(req, res) {
            res.render('auth/register',{image:'images/login_Register.png'})
        },
        async postRegister(req, res) {
            const hashPassword = await bcrypt.hash(req.body.Password, 10)
            const newUser = await new User({
                Username: req.body.Username,
                Email: req.body.Email,
                Password: hashPassword
            }).save().then(newUser => {
                console.log(newUser)
                return res.redirect('/login')
            })
        },
        logout( req,res ){
            req.session.user='';
            res.render('home')
        }
    }
}

module.exports = authController