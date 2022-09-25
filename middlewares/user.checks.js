const { check } = require("express-validator");

const userChecks = [
    check('username')
        .not()
        .isEmpty()
        .withMessage('User name is required'),
    check('email')
        .not()
        .isEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Invalid email'),
    check('password')
        .not()
        .isEmpty()
        .withMessage('Password is required')
        .isLength(8)
        .withMessage('Password must have at least 8 characters')
];

module.exports = { userChecks };