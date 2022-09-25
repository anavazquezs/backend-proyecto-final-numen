const userCtrl = {};
const User = require('../models/User');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
require('dotenv').config();

//User register
userCtrl.userRegister = async (req, res) => {
    try {
        const error = validationResult(req);
        const { username, email, password } = req.body;
        const emailUser = await User.findOne({email: email});
        if(error.isEmpty() && !emailUser) {
            const newUser = new User({username: username, email: email, password: password});
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            res.send('Your registration was successful');
        } else if(emailUser) {
            res.send('The email is already in use');
        } else {
            res.status(501).json(error);
        };
    } catch (err) {
        res.status(501).json({msg: 'Can not register a user', err});
    };
};

//Login
userCtrl.login = async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({email: email});
        if(!user) {
            res.json({msg: 'User not found'});
        };
        if(user) {
            const match = bcrypt.compareSync(password, user.password);
            if(!match) {
                res.json({msg: 'Wrong password'});
            };
        };
        req.session.user = user;
        req.session.admin = true;
        res.status(201).json({msg: "You are login"});
        } catch (err) {
            res.status(501).json({msg: 'Can not login now, try it later', err});
        };
};

//Logout
userCtrl.logout = (req, res) => {
    req.session.destroy();
    res.json({msg: 'You are logout'});
};

module.exports = userCtrl;