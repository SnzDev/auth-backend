module.exports = {
    //migrate with dotenv npx dotenv -e .env sequelize db:migrate
    dialect: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,    
  }