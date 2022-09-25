const bookCtrl = {};
const { validationResult } = require('express-validator');
const Book = require('../models/Book');
const axios = require("axios");

//View all books
bookCtrl.viewBooks = async (req, res) => {
    const books = await Book.find();
    res.json({books});
};

//View one book
bookCtrl.viewOneBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.json({book});
    } catch (err) {
        res.status(400).json({msg: 'Error with book id', err});
    };
};

//Create book (only athorized users)
bookCtrl.createBook = async (req, res) => {
    try {
        const error = validationResult(req);
        if(error.isEmpty()) {
            const { title, author, genre, summary, rating, languages, isbn, in_stock, price } = req.body;
            const newBook = new Book({title, author, genre, summary, rating, languages, isbn, in_stock, price});
            await newBook.save();
            res.send('Success to create a new book');
            res.status(201).json({newBook});
        } else {
            res.status(501).json(error);
        };
    } catch (err) {
        res.status(501).json({msg: 'Can not save the new book into data base', err});
    };
};

//Edit one book (only athorized users)
bookCtrl.editBook = async (req, res) => {
    try {
        const error = validationResult(req);
        if(error.isEmpty()) {
            const { id } = req.params;
            await Book.findByIdAndUpdate(id, req.body);
            res.status(202).json({msg: 'Book updated succesfully'});
        } else {
            res.status(501).json(error);
        };
    } catch (err) {
        res.status(501).json({msg: 'Can not update the book', err});
    };
};

//Delete one book (only athorized users)
bookCtrl.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        res.json({msg: 'Book deleted successfully'});
    } catch (err) {
        res.status(400).json({msg: 'Can not delete the book', err});
    };
};

//Axios consult best books of a year
bookCtrl.axiosConsult = async (req, res) => {
    try {
        const response = await axios.get('https://openlibrary.org/subjects/'+req.params.subject+'.json',
        {
            timeout: 1000
        });
        res.json({
            status: response.status,
            data: response.data,
        })
    } catch (err) {
        res.json({ status: err.response.status, data: err.response.data });
    };
};

module.exports = bookCtrl;