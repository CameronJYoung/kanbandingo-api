module.exports = (sequelize, Sequelize) => {
	const Column = sequelize.define('column', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: Sequelize.STRING,
		},
	});

	return Column;
};