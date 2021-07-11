const jwt = require('jsonwebtoken');

exports.verifyToken = async (req, res, next) => {
	const token = await req.cookies.token || '';
	console.log(await req.cookies);
	try {
		if (!token) {
			return res.status(401).json('You need to Login')
		}
		
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