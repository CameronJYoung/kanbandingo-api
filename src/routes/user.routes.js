const router = require('express').Router();
const authMiddleware = require('../middleware/auth.middleware.js');
const user = require('../controllers/user.controller.js');

module.exports = (app) => {
	router.get('/', user.getUsers); // GET ALL BOARDS

	router.post('/board', authMiddleware.verifyToken, user.createBoard);
	router.post('/column/:boardID/', authMiddleware.verifyToken, user.createColumn);
	router.post('/ticket/:columnID', authMiddleware.verifyToken, user.createTicket);
	router.post('/comment/:ticketID', authMiddleware.verifyToken, user.createComment);

	router.put('/ticket/:ticketID/:columnID/move', user.moveTicket);
	
	router.get('/board', authMiddleware.verifyToken, user.getUsersBoards); // GET ALL BOARDS
	router.get('/board/:boardID', authMiddleware.verifyToken, user.getUsersBoardById); // GET BOARD BY ID

	app.use('/user', router);
};