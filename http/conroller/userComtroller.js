function userController() {
    return{
        index(req, res){
            res.render('home')
         },
         postMenu (req,res){
            res.render('PostMenu')
        },
        delete (req,res) {
            res.render('delete')
        },
        updateMenu (req,res) {
            res.render('update')
        }
    }
}

module.exports = userController