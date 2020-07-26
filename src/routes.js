const express = require('express');
const routes = express.Router();

const userController = require('./controller/userController');

routes.get('/',(req,res) => {
    return res.json('Reboot auth-backend');
});

routes.get('/users', userController.index);
routes.post('/users', userController.store);
routes.post('/user', userController.show);


module.exports = routes;