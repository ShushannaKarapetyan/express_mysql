const express = require('express');
const router = express.Router();
const BooksController = require('../Controllers/BooksController');
const StudentsController = require('../Controllers/StudentsController');
const GradesController = require('../Controllers/GradesController');
const CourseController = require('../Controllers/CoursesController');

router.post('/books', BooksController.create);
router.get('/books', BooksController.getBooks);
router.get('/books/:id', BooksController.getBook);
router.delete('/books/:id', BooksController.deleteBook);

router.get('/students', StudentsController.getStudents);

router.get('/grades', GradesController.getGrades);

router.get('/courses', CourseController.getCourses);

module.exports = router;
