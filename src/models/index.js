const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config');

// const sequelize = new Sequelize(
// 	dbConfig.DB,
// 	dbConfig.USER,
// 	dbConfig.PASSWORD, {
// 		host: dbConfig.HOST,
// 		dialect: dbConfig.dialect,
// 		pool: {
// 			max: dbConfig.pool.max,
// 			min: dbConfig.pool.min,
// 			acquire: dbConfig.pool.acquire,
// 			idle: dbConfig.pool.idle,
// 		},
// 	},
// );

const sequelize = new Sequelize(process.env.DATABASE_URL, {
	dialect: dbConfig.dialect,
	ssl: true, 
	dialectOptions: {
		ssl: true
	}
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//db.user = require('./user.model.js')(sequelize, Sequelize);
db.board = require('./board.model.js')(sequelize, Sequelize);
db.column = require('./column.model.js')(sequelize, Sequelize);
db.ticket = require('./ticket.model.js')(sequelize, Sequelize);
db.comment = require('./comment.model.js')(sequelize, Sequelize);

db.board.hasMany(db.column);
db.column.belongsTo(db.board);

db.column.hasMany(db.ticket);
db.ticket.belongsTo(db.column);

db.ticket.hasMany(db.comment);
db.comment.belongsTo(db.ticket);

module.exports = db;