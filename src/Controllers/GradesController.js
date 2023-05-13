const Grade = require('../Models/Grade');
const Student = require('../Models/Student');
const HttpStatus = require('http-status-codes');

class GradesController {
    async getGrades(req, res) {
        try {
            Grade.hasMany(Student);

            const grades = await Grade.findAll({
                where: {
                    grade: 9
                },
                include: [{
                    model: Student
                }]
            });

            res.status(HttpStatus.OK).send(grades);
        } catch (error) {
            throw new Error(`Failed to retrieve data: ${error}`);
        }
    }
}

module.exports = new GradesController();