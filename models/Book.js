const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
    },
    summary: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
    },
    languages: [{
        type: String,
    }],
    isbn: {
        type: String,
        required: true,
        unique: true,
    },
    in_stock: {
        type: Boolean,
        required: true,
    },
    stock: {
        type: Number,
    },
    price: {
        type: Number,
    },
}, {
    timestamps: true,
});

module.exports = model('Book', BookSchema);