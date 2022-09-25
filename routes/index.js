const express = require('express');
const router = express.Router();
const indexCtrl = require('../controllers/index.controllers');

/* GET home page. */
router.get('/', indexCtrl.renderIndex);

module.exports = router;