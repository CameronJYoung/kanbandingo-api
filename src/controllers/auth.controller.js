const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const modelExists = require('../helpers/modelExists');
const getModel = require('../helpers/getModel');
const generateJwt = require('../helpers/generateJwt');
const db = require('../models');

const User = db.user;

exports.register = (req, res) => {

	const user = {
		username: req.body.username,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, salt)
	}

	User.create(user)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Error occured while creating user!',
			});
		});
};

exports.login = async (req, res) => {
	const { username, password } = req.body;
	const userExists = await modelExists(User, 'username', username);
	
	if (userExists) {
		try {
			const user = await getModel(User, 'username', username);
			if(bcrypt.compareSync(password, user.password)){
				console.log(1);
				generateJwt(res, user.id, username);
			} else {
				return res.status(500).send('incorrect password!');
			}
			
		} catch (err) {
			return res.status(500).json(err.toString());
		}
	} else {
		return res.status(500).json('USER DOES NOT EXIST');
	}
	
};