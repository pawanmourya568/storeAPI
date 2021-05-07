const menus = require('../modles/menus')
const Menu = require('../modles/menus')
function userController() {
    return{
        index(req, res){
            res.render('home')
         },
         postMenu (req,res){
            res.render('PostMenu')
        },
        async delete (req,res) {
            const meals = await Menu.find({},{Meal:1,_id:1})
            console.log(meals)
            return res.render('delete',{meals : meals})
        },
        async updateMenu (req,res) {
            const meals = await Menu.find({},{Meal:1,_id:1},)
            res.render('update')
        },
        api (req,res){
            const user =req.session.user
            res.render('api',{user:user})
        },
        aboutus (req,res){
            res.render('aboutus')
        }
    }
}

module.exports = userController