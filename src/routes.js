const express = require('express');
const routes = express.Router();

const UserController = require('./controller/UserController');
const SessionController = require('./controller/SessionController');

routes.get('/', (req,res)=>{
    res.send("Hello World");
});

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/user', UserController.show);

routes.get('/session', SessionController.index);
routes.post('/session', SessionController.store);


module.exports = routes;