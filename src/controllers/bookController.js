import book from "../models/Book.js";

class BookController {

    static async listBooks(req, res) {
        try {
            const listBooks = await book.find({});
            res.status(200).json(listBooks);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Error on request!` });
        } 
    };

    static async listBookById(req, res) {
        try {
            const id = req.params.id;
            const resultBook = await book.findById(id);
            res.status(200).json(resultBook);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Error on request!` });
        } 
    };

    static async registerBook(req, res) {
        
        try {
            const newBook = await book.create(req.body);
            res.status(201).json({ message: "Done!", book: newBook });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Error on register new book!` });
        }
        
    };

    static async updateBook(req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Book has been updated!"});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Error on book update!`});
        } 
    };

};

export default BookController;