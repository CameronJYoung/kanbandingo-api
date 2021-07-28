const db = require('../models');

const getModel = require('../helpers/getModel');

const User = db.user;
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
		name: req.body.name,
		userId: req.user.id
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

exports.getUsersBoards = (req, res) => {
	Board.findAll({
		where: {
			userId: req.user.id
		}
	}).then(result => {
		res.send(result)
	})
}

exports.getUsersBoardById = (req, res) => {
	Board.findAll({
		where: {
			userId: req.user.id,
			id: req.params.boardID
		}
	}).then(result => {
		res.send(result[0])
	})
}

exports.getUsers = (req, res) => {
	User.findAll().then(result => {
		res.send(result)
	})
}

exports.moveTicket = (req, res) => {
	console.log(req.params.ticketID);
	console.log(req.params.columnID);
	Ticket.findByPk(req.params.ticketID).then(result => {
		result.columnId = req.params.columnID
		result.save()
		res.send('done')
	}).catch(err => {
		res.json(err)
	})
}