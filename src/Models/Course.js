const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('../database/mysql');
const Student = require('../Models/Student');

const Course = sequelize.define('courses', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

const StudentCourse = sequelize.define('StudentCourse', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
}, {
    timestamps: false,
});

Course.belongsToMany(Student, {through: 'StudentCourse'})
Student.belongsToMany(Course, {through: 'StudentCourse'})

module.exports = {
    Course,
    StudentCourse,
};
