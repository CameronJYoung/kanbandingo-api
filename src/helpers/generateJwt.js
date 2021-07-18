const jwt = require('jsonwebtoken');

Date.prototype.addHours= function(h){
	this.setHours(this.getHours()+h);
	return this;
}

const generateJwt = (res, id, username) => {
	
	const expiration = process.env.NODE_ENV === 'development' ? 100 : 604800000;
	const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
	  expiresIn: process.env.NODE_ENV === 'development' ? '1d' : '7d',
	});
	if (process.env.NODE_ENV === 'development') {
		return res.cookie('token', token, {
			expires: new Date(new Date().addHours(1) + expiration),
			secure: false, 
			httpOnly: true,
		}).sendStatus(200)
	} else {
		console.log(1);
		console.log(token);
		return res.cookie('token', token, {
			maxAge: 1000,
			domain: 'https://kanbandingo-frontend.herokuapp.com/',
			secure: true, 
			httpOnly: true
		}).sendStatus(200)
	}

};
module.exports = generateJwt;