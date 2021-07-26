const jwt = require('jsonwebtoken');

Date.prototype.addHours= function(h){
	this.setHours(this.getHours()+h);
	return this;
}

const generateJwt = (res, id, username) => {
	const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
	  expiresIn: process.env.NODE_ENV === 'development' ? '1d' : '7d',
	});
	res.json({
		token: token
	})
};
module.exports = generateJwt;