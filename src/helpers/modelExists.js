const modelExists = (Model, key, uniqueValue) => {
	const query = {
		where: {
			[key]: uniqueValue
		}
	}
	return Model.findAll(query).then(result => {
		if (result.length === 0) {
			return false;
		} else {
			return true;
		}
	}).catch(err => {
		return false;
	})
};
module.exports = modelExists;