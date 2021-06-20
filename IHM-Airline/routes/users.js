const express = require( 'express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/register', userController.getRegister);

router.post('/addUser', userController.postUser);

router.get('/login', userController.getLoginUser);

 router.post('/loginUser', userController.loginUser);

module.exports = router;