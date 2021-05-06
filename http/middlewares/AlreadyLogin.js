function AlreadyLogin (req,res,next){
    if(req.session.user){
        return res.render('/home')
    }else{
        next()
    }
}

module.exports = AlreadyLogin