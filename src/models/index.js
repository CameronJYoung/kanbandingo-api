const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config');

console.log(dbConfig);
const sequelize = new Sequelize(dbConfig);

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