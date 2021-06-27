const getModel = (Model, key, uniqueValue) => {
	const query = {
		where: {
			[key]: uniqueValue
		}
	}
	return Model.findAll(query).then(result => {
		return result[0];
	}).catch(err => {
		return err.toString();
	})
};
module.exports = getModel;
