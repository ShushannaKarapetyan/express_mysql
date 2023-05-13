const Student = require('../Models/Student');
const Grade = require('../Models/Grade');
const HttpStatus = require('http-status-codes');

async function getStudents(req, res) {
    try {
        const students = await Student.findAll({
            include: [{
                model: Grade
            }]
        });

        res.status(HttpStatus.OK).send(students);
    } catch (error) {
        throw new Error(`Failed to retrieve data: ${error}`);
    }
}

module.exports = {
    getStudents,
}