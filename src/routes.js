const express = require('express');
const routes = express.Router();

routes.get('/',(req,res) => {
    return res.json('Reboot auth-backend');
})


module.exports = routes;