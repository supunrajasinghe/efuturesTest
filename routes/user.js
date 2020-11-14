const express = require('express');
const UserController = require('./../controllers/UserController');
const AuthController = require('./../controllers/AuthController');
const router = express.Router();

router.get('/', UserController.getUser);
router.get('/logout', AuthController.logout);

module.exports = router;