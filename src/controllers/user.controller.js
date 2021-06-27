const db = require('../models');
const User = db.user;

exports.getUsersBoards = (req, res) => {
	User.findAll({
		where: {
			userId: req.user.id
		}
	}).then(result => {
		res.send(result)
	})
}

// exports.getUsersBoardById = (req, res) => {
// 	User.findByPk(req.params.boardID).then(result => {
// 		res.send(result)
// 	})


// }