const connection = require('../database/database');

module.exports = {
    async index(req, res) {
        const users = await connection('users').select();
        console.log(users);
        return res.json(users);
    },
    async store(req, res) {
        const {name, email, password} = req.body;

        const response = await connection('users').insert({name, email, password});

        console.log(response);

        return res.json('IT WORKS!');
    },
}