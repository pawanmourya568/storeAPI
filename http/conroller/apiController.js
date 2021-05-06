const Menu = require('../modles/menus')

function apiController() {
    return{
        async getMenuData (req, res) {
            const menu =await Menu.find()
            res.send(menu)
            console.log(menu)
         },
         async getSpecificMenuData (req, res) {
            const menu =await Menu.find({Meal:req.query.meal})
            res.send(menu)
            console.log(menu)
         },
        postMenuData (req,res) {
            const NewMenuItem = new Menu({
        
                Type : req.body.type,
                Meal:  req.body.meal,
                Discount: req.body.discount,
                Price:  req.body.price,
                Rating:  req.body.rating
        
            }).save().then((NewMenuItem) =>{
                console.log(NewMenuItem)
                res.render('home')
            })
        },
            async deleteMenuApi (req, res) {
                const RemoveMenuItem = await Menu.remove({ Meal: req.params.names })
                res.json(RemoveMenuItem)
        },
        async deleteMenu (req,res){
            console.log(req.body.meal)
            const RemoveMenuItem = await Menu.remove({ _id: req.body.meal })
                res.json(RemoveMenuItem)
        },
        async updateMenu (req,res){
            const meal=req.body.meal
            const valueOf = req.body.valueOf
            const value=req.body.value
            try{
                if(valueOf=='Meal'){
                    const updateMenuItem = await Menu.updateOne({Meal : meal}, {$set: {meal : value}})
                }else if(valueOf=='Rating'){
                    const updateMenuItem = await Menu.updateOne({Meal : meal}, {$set: {Rating : value}})
                }else if(valueOf=='Type'){
                    const updateMenuItem = await Menu.updateOne({Meal : meal}, {$set: {Type : value}})
                }
                else if(valueOf=='Discount'){
                    const updateMenuItem = await Menu.updateOne({Meal : meal}, {$set: {Discount : value}})
                }
                else if(valueOf=='Price'){
                    const updateMenuItem = await Menu.updateOne({Meal : meal}, {$set: {Price : value}})
                }else{
                    res.render('home')
                } 
            }catch(err){
                res.json(err)
            }
            finally{
                res.render('update')
                
            }
        }
    }
}

module.exports = apiController
