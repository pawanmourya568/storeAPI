const User = require('../modles/users')
function checkAPI (req,res,next){
    const APIKey =req.query.APIKey
    if(APIKey){
        User.findById(APIKey, function (err, docs) {
            if (err){
                return res.send({'message':'Something Went Wrong'})
                console.log(err);
            }
            else{
                console.log("Result : ", docs);
                next()
            }
        });
    }else{
        res.send({'message':'Enter valid APIKey'})
    }
}

module.exports = checkAPI