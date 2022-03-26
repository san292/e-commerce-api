const router = require('express').Router();

const authController = require('../controllers/authController');

// @desc REGISTER user
// @route POST api/auth/register
//@acces Public
router.post('/register', authController.register);

// @desc LOGIN user
// @route POST api/auth/login
//@acces Public

router.post('/login', authController.login);

module.exports = router;
