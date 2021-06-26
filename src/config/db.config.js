const getConfig = () => {
	if (process.env.NODE_ENV !== 'production') {
		// return () => {
		// 	process.env.DB_DB,
		// 	process.env.DB_USER,
		// 	process.env.DB_PASSWORD, {
		// 		host: process.env.DB_HOST,
		// 		dialect: process.env.DB_dialect,
		// 		pool: {
		// 			max: dbConfig.pool.max,
		// 			min: dbConfig.pool.min,
		// 			acquire: dbConfig.pool.acquire,
		// 			idle: dbConfig.pool.idle,
		// 		},
		// 	}
		// }
		return (
			process.env.DB_DB,
			process.env.DB_USER,
			process.env.DB_PASSWORD, {
				host: process.env.DB_HOST,
				dialect: process.env.DB_dialect,
				pool: {
					max: dbConfig.pool.max,
					min: dbConfig.pool.min,
					acquire: dbConfig.pool.acquire,
					idle: dbConfig.pool.idle,
				},
			}
		)
	} else {
		// return () => {
		// 	process.env.DB_DB,
		// 	process.env.DB_USER,
		// 	process.env.DB_PASSWORD, {
		// 		host: process.env.DB_HOST,
		// 		dialect: process.env.DB_dialect,
		// 		dialectOptions: {
		// 			ssl: {
		// 			require: true,
		// 			rejectUnauthorized: false // <<<<<<< YOU NEED THIS
		// 			}
		// 		},
		// 		pool: {
		// 			max: dbConfig.pool.max,
		// 			min: dbConfig.pool.min,
		// 			acquire: dbConfig.pool.acquire,
		// 			idle: dbConfig.pool.idle,
		// 		},
		// 	}
		// }
		return (
			process.env.DB_DB,
			process.env.DB_USER,
			process.env.DB_PASSWORD, {
				host: process.env.DB_HOST,
				dialect: process.env.DB_dialect,
				dialectOptions: {
					ssl: {
					require: true,
					rejectUnauthorized: false // <<<<<<< YOU NEED THIS
					}
				},
				pool: {
					max: dbConfig.pool.max,
					min: dbConfig.pool.min,
					acquire: dbConfig.pool.acquire,
					idle: dbConfig.pool.idle,
				},
			}
		)
	}
}

module.exports = getConfig();


