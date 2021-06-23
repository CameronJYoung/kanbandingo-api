module.exports = (sequelize, Sequelize) => {
	const Ticket = sequelize.define('ticket', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		description: {
			type: Sequelize.STRING,
		},
	});

	return Ticket;
};