const Sequelize = require('sequelize');

if (process.env.NODE_ENV === 'development') {
	module.exports = new Sequelize(process.env.DB_DB,
		process.env.DB_USER,
		process.env.DB_PASSWORD, {
			host: process.env.DB_HOST,
			dialect: process.env.DB_DIALECT,
			pool: {
				max: 5,
				min: 0,
				acquire: 3000,
				idle: 10000
			}, 
		},
	)
} else if (process.env.NODE_ENV === 'production') {
	module.exports = new Sequelize(process.env.DB_DB,
		process.env.DB_USER,
		process.env.DB_PASSWORD, {
			host: process.env.DB_HOST,
			dialect: process.env.DB_DIALECT,
			dialectOptions: {
				ssl: {
				  require: true,
				  rejectUnauthorized: false // <<<<<<< YOU NEED THIS
				}
			},
			pool: {
				max: 5,
				min: 0,
				acquire: 3000,
				idle: 10000
			},
		},
	)
}