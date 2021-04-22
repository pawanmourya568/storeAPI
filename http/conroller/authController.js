const User = require('../modles/users')
const bcrypt = require('bcrypt')
const users = require('../modles/users')
function authController() {
    return {
        login(req, res) {
            res.render('auth/login')
        },
        async postLogin(req, res, next) {
            const { Email, Password } = req.body
            const user = await User.findOne({ Email })
            console.log(user)
            if (user) {
                pass = user.Password
                const match = await bcrypt.compare(Password, pass)
                console.log(match)
                if (match) {
                    return res.render('home',{user:user})
                }
            }
        },
        register(req, res) {
            res.render('auth/register')
        },
        async postRegister(req, res) {
            const hashPassword = await bcrypt.hash(req.body.Password, 10)
            const newUser = await new User({
                username: req.body.Username,
                Email: req.body.Email,
                Password: hashPassword
            }).save().then(newUser => {
                console.log(newUser)
                return res.redirect('/login')
            })
        }
    }
}

module.exports = authController