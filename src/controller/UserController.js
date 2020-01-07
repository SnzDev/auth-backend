const User = require('../model/User');

module.exports = {
    async index(req,res){
        res.send("It Works!");
    },
    async store(req,res){
        res.send("It Works!");
    },
    async show(req,res){
        res.send("It Works!");
    }
}