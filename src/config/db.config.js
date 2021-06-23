module.exports = {
	HOST: process.env.DB_HOST,
	USER: process.env.DB_USER,
	PASSWORD: process.env.DB_PASSWORD,
	DB: process.env.DB_DB,
	dialect: process.env.DB_dialect,
	pool: {
		max: 5,
		min: 0,
		acquire: 3000,
		idle: 10000,
	},
};