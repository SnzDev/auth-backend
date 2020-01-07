const dbconfig = require("../config/database");
const Sequelize = require("sequelize");
const connection = new Sequelize(dbconfig);

const User = require('../model/User');

User.init(connection);


module.exports = connection;