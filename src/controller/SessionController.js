const User = require('../model/User');

module.exports = {
    async index(req,res){

    },
    async store(req,res){
        const {email, password} = req.body;

        const response = await User.findAll({
            where:{
                email,
                password,
            },
        });
        
        res.json(response);
    },
    
}