const Student = require('../Models/Student');
const {Course, StudentCourse} = require('../Models/Course');
const HttpStatus = require('http-status-codes');

async function getCourses(req, res) {
    try {
        const courses = await Course.findAll({
            include: {
                model: Student,
            },
        });

        res.status(HttpStatus.OK).send(courses);
    } catch (error) {
        throw new Error(`Failed to retrieve data: ${error}`);
    }
}

module.exports = {
    getCourses,
};