const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require("../database/mysql");
const Grade = require("./Grade");

const Student = sequelize.define('students', {
    // id: {
    //     type: DataTypes.UUID,
    //     defaultValue: DataTypes.UUIDV4,
    //     primaryKey: true,
    // },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

sequelize.sync()
    .then(() => {
        console.log('Student table created successfully!');
    })
    .catch((error) => {
        console.error('Unable to create table : ', error);
    });

// One-To-One association
Student.belongsTo(Grade);

module.exports = Student;