const express = require('express');
const routes = express.Router();

const userController = require('./controller/userController');

routes.get('/',(req,res) => {
    return res.json('Reboot auth-backend');
});

routes.get('/users', userController.index);
routes.post('/user', userController.store);


module.exports = routes;