const Book = require('../models/Book');

const validateId = async (req, res, next) => {
    const book = await Book.findById(req.params.id);
    if(book !== null) {
        next();
    } else {
        res.json({msg: 'Invalid book id'});
    };
};

module.exports = { validateId };