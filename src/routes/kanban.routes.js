const router = require('express').Router();
const authMiddleware = require('../middleware/auth.middleware.js');
const kanban = require('../controllers/kanban.controller.js');

module.exports = (app) => {
	router.post('/board', authMiddleware.verifyToken, kanban.createBoard);
	router.post('/column/:boardID/', authMiddleware.verifyToken, kanban.createColumn);
	router.post('/ticket/:columnID', authMiddleware.verifyToken, kanban.createTicket);
	router.post('/comment/:ticketID', authMiddleware.verifyToken, kanban.createComment);

	router.get('/board', kanban.getAllBoards); // GET ALL BOARDS
	router.get('/board/:boardID', kanban.getBoardById); // GET BOARD BY ID
	router.get('/board/:boardID/columns', kanban.getColumnsByBoardId); // GET COLUMNS FROM BOARD ID
	router.get('/column/:columnID/', kanban.getColumnById); // GET COLUMNS FROM ID
	router.get('/column/:columnID/tickets', kanban.getTicketsByColumnId); // GET TICKETS FROM COLUMN ID
	router.get('/ticket/:ticketID/', kanban.getTicketById); // GET ALL COMMENTS BY TICKET ID
	router.get('/ticket/:ticketID/comments', kanban.getCommentsByticketId); // GET ALL COMMENTS BY TICKET ID
	router.get('/comment/:commentID/', kanban.getCommentsById); // GET COMMENTS BY ID

	app.use('/kanban', router);
};