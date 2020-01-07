const User = require('../model/User');

module.exports = {
    async index(req,res){
        const response = await User.findAll();
        console.log(response);
        res.json(response);
    },
    async store(req,res){
        const {name, email, password} = req.body;

        const response = await User.create({name, email, password});
        console.log(response);
        res.json(response);
    },
    async show(req,res){
        const {id} = req.body;

        const response = await User.findByPk(id);
        console.log(response);
        res.json(response);
    }
}