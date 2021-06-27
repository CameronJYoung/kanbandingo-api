const router = require('express').Router();
const authMiddleware = require('../middleware/auth.middleware.js');
const user = require('../controllers/user.controller.js');

module.exports = (app) => {
	router.get('/board', authMiddleware.verifyToken, user.getUsersBoards); // GET ALL BOARDS

	app.use('/user', router);
};