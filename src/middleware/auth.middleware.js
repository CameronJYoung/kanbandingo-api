const jwt = require('jsonwebtoken');

exports.verifyToken = async (req, res, next) => {
	const token = await req.headers.authorization || '';
	console.log(token);
	try {
		const decrypt = await jwt.verify(token, process.env.JWT_SECRET);

		if (!decrypt) {
			return res.status(401).json({authentication: false})
		}
		
		req.user = {
			id: decrypt.id,
			username: decrypt.username
		}
		next();
	} catch (err) {
		return res.status(500).json({authentication: false});
	}
}