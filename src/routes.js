const express = require('express');
const routes = express.Router();

const UserController = require('./controller/UserController');

routes.get('/', (req,res)=>{
    res.send("Hello World");
});

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/user', UserController.show);

module.exports = routes;