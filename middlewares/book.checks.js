const { check } = require("express-validator");

const bookChecks = [
    check('title')
        .not()
        .isEmpty()
        .withMessage('Book title is required'),
    check('author')
        .not()
        .isEmpty()
        .withMessage('Author of book is required'),
    check('summary')
        .not()
        .isEmpty()
        .withMessage('Book summary is required'),
    check('isbn')
        .not()    
        .isEmpty()
        .withMessage('Book ISBN is required'),
    check('in_stock')
        .not()
        .isEmpty()
        .withMessage('It is required if there is stock of the book'),
];

module.exports = { bookChecks };