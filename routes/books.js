const express = require('express');
const router = express.Router();
const bookCtrl = require('../controllers/book.controllers');
const { validateId } = require('../middlewares/validateId');
const { bookChecks } = require('../middlewares/book.checks');
const auth = require('../middlewares/user.session');

//GET all books
router.get('/view', bookCtrl.viewBooks);

//GET one book
router.get('/view/:id', validateId, bookCtrl.viewOneBook);

//POST to create a book (only athorized users)
router.post('/create', auth, bookChecks, bookCtrl.createBook);

//PUT to update a book (only athorized users)
router.put('/edit/:id', auth, validateId, bookChecks, bookCtrl.editBook);

//DELETE one book (only athorized users)
router.delete('/delete/:id', auth, validateId, bookCtrl.deleteBook);

//Axios consult books by subject
router.get('/subject/:subject', bookCtrl.axiosConsult); //Subjects: love, science, sciencefiction, history, fantasy, suspense, thriller, adventures, terror

module.exports = router;