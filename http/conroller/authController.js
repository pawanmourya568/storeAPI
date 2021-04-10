const User =require('../modles/user')

function authController() {
    return{
        login  (req, res) {
            res.render('auth/login')
         },
         postLogin(req, res, next) {
            const { email, password }   = req.body
           // Validate request 
            if(!email || !password) {
                req.flash('error', 'All fields are required')
                return res.redirect('/login')
            }
            passport.authenticate('local', (err, user, info) => {
                if(err) {
                    req.flash('error', info.message )
                    return next(err)
                }
                if(!user) {
                    req.flash('error', info.message )
                    return res.redirect('/login')
                }
                req.logIn(user, (err) => {
                    if(err) {
                        req.flash('error', info.message ) 
                        return next(err)
                    }

                    return res.redirect(_getRedirectUrl(req))
                })
            })(req, res, next)
        },


         register (req, res) {
            res.render('auth/register')
         },
         postRegister(req,res) {
            const newUser = new User({
                username:req.body.Username,
                Email:req.body.Email,
                Password:req.body.Password
            }).save().then(newUser => {
                console.log(newUser)
                res.render('auth/login')
            }).catch(
                console.log('something went wrong')
            )
         }
    }
}

module.exports = authController