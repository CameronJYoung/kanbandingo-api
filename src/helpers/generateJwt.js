const jwt = require('jsonwebtoken');

const generateJwt = (res, id, username) => {
	const expiration = process.env.NODE_ENV === 'development' ? 100 : 604800000;
	const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
	  expiresIn: process.env.NODE_ENV === 'development' ? '1d' : '7d',
	});
	if (process.env.NODE_ENV === 'development') {
		return res.cookie('token', token, {
			expires: new Date(Date.now() + expiration),
			secure: false, 
			httpOnly: true,
		}).sendStatus(200)
	} else {
		return res.cookie('token', token, {
			expires: new Date(Date.now() + expiration),
			secure: true, 
			httpOnly: true,
		}).sendStatus(200)
	}

};
module.exports = generateJwt;