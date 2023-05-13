const Book = require('../Models/Book');
const HttpStatus = require('http-status-codes');

class BooksController {
    async create(req, res) {
        const {
            title,
            author,
            release_date,
            subject
        } = req.body;

        try {
            const book = await Book.create({
                    title,
                    author,
                    release_date,
                    subject
                }
            );

            res.status(HttpStatus.CREATED).send(book);
        } catch (error) {
            throw new Error("Can't create the book.");
        }
    }

    async getBooks(req, res) {
        try {
            const books = await Book.findAll();

            res.status(HttpStatus.OK).send(books);

        } catch (error) {
            throw new Error(`Failed to retrieve data: ${error}`);
        }
    }

    async getBook(req, res) {
        try {
            const book = await Book.findOne({
                where: {
                    id: req.params.id
                }
            });

            res.status(HttpStatus.OK).send(book);
        } catch (error) {
            throw new Error(`Failed to retrieve data: ${error}`);
        }
    }

    async deleteBook(req, res) {
        try {
            await Book.destroy({
                where: {
                    id: req.params.id
                }
            });

            res.status(HttpStatus.OK).send('Successfully deleted record.');
        } catch (error) {
            throw new Error(`Failed to delete record: ${error}`);
        }
    }
}

module.exports = new BooksController();