const Sequelize = require('sequelize');
const {DB_DATABASE, DB_HOST, DB_USER, DB_PASSWORD} = process.env;

const sequelize = new Sequelize(
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD,
    {
        host: DB_HOST,
        dialect: "mysql",
    }
);

async function authenticate() {
    try {
        await sequelize.authenticate();

        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
    }
}

module.exports = {
    sequelize,
    authenticate,
}