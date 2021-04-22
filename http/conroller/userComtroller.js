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
            const meals = await Menu.find({},{Meal:1,_id:0})
            console.log(meals)
            return res.render('delete',{meals : meals})
        },
        updateMenu (req,res) {
            res.render('update')
        }
    }
}

module.exports = userController