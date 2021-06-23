const db = require('../models');

const Board = db.board;
const Column = db.column;
const Ticket = db.ticket;
const Comment = db.comment;

exports.createBoard = (req, res) => {
	if (!req.body.name) {
		res.status(400).send({
			message: 'Content cannot be empty!',
		});
		return;
	}

	const board = {
		name: req.body.name
	}
	console.log(Board);
	Board.create(board)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Error occured while creating user!',
			});
		});
};

exports.createColumn = (req, res) => {
	if (!req.body.name) {
		res.status(400).send({
			message: 'Content cannot be empty!',
		});
		return;
	}

	console.log(req.params.boardID);

	const column = {
		name: req.body.name,
		boardId: req.params.boardID
	}
	console.log(Column);
	Column.create(column)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Error occured while creating user!',
			});
		});
};

exports.createTicket = (req, res) => {
	if (!req.body.description) {
		res.status(400).send({
			message: 'Content cannot be empty!',
		});
		return;
	}

	const ticket = {
		description: req.body.description,
		columnId: req.params.columnID
	}
	console.log(ticket);
	Ticket.create(ticket)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Error occured while creating user!',
			});
		});
};

exports.createComment = (req, res) => {
	if (!req.body.content) {
		res.status(400).send({
			message: 'Content cannot be empty!',
		});
		return;
	}

	const comment = {
		content: req.body.content,
		ticketId: req.params.ticketID
	}
	console.log(comment);
	Comment.create(comment)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Error occured while creating user!',
			});
		});
};

exports.getAllBoards = (req, res) => {
	Board.findAll().then(result => {
		res.send(result)
	})
}

exports.getBoardById = (req, res) => {
	Board.findByPk(req.params.boardID).then(result => {
		res.send(result)
	})
}

exports.getColumnsByBoardId = (req, res) => {
	Column.findAll({
		where: {
			boardId: req.params.boardID
		}
	}).then(result => {
		res.send(result)
	})
}

exports.getColumnById = (req, res) => {
	Column.findByPk(req.params.columnID).then(result => {
		res.send(result)
	})
}

exports.getTicketsByColumnId = (req, res) => {
	Ticket.findAll({
		where: {
			columnId: req.params.columnID
		}
	}).then(result => {
		res.send(result)
	})
}

exports.getTicketById = (req, res) => {
	Ticket.findByPk(req.params.ticketID).then(result => {
		res.send(result)
	})
}

exports.getCommentsByticketId = (req, res) => {
	Comment.findAll({
		where: {
			ticketId: req.params.ticketID
		}
	}).then(result => {
		res.send(result)
	})
}

exports.getCommentsById = (req, res) => {
	Comment.findByPk(req.params.commentID).then(result => {
		res.send(result)
	})
}





