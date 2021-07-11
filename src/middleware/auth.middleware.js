const jwt = require('jsonwebtoken');

exports.verifyToken = async (req, res, next) => {
	const token = await req.cookies.token || '';

	try {
		if (!token) {
			return res.status(401).json('You need to Login')
		}
		console.log(token);
		const decrypt = await jwt.verify(token, process.env.JWT_SECRET);
		req.user = {
			id: decrypt.id,
			username: decrypt.username
		}
		next();
	} catch (err) {
		return res.status(500).json(err.toString());
	}
}