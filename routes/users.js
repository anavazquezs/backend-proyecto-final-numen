const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controllers');
const { userChecks } = require('../middlewares/user.checks');

//POST to register a user
router.post('/register', userChecks, userCtrl.userRegister);

//POST to login
router.post('/login', userCtrl.login);

//GET to logout
router.get('/logout', userCtrl.logout);

module.exports = router;
