const router = require('express').Router();
const auth = require('../controllers/auth.controller.js');

module.exports = (app) => {
	router.post('/register', auth.register);
	router.post('/login', auth.login);
	router.post('/verify', auth.checkAuth);

	app.use('/auth', router);
};