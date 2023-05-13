const {Sequelize, DataTypes, DATE} = require('sequelize');
const {sequelize} = require("../database/mysql");
const Student = require('./Student');

const Grade = sequelize.define('grades', {
    grade: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

sequelize.sync()
    .then(() => {
        console.log('Grade table created successfully!');
    })
    .catch((error) => {
        console.error('Unable to create table : ', error);
    });

// One-To-Many association
// Grade.hasMany(Student);

module.exports = Grade;