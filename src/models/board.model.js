module.exports = (sequelize, Sequelize) => {
	const Board = sequelize.define('board', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: Sequelize.STRING,
		},
	});

	return Board;
};