if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Initialize App

const app = express();

// Apply Middleware

app.use(cookieParser());
app.use(express.urlencoded({
	extended: true,
}));
app.use(express.json());
app.use(cors({
	origin: 'http://localhost:3000',
	credentials: true,
	methods: 'GET, POST, PUT, PATCH, DELETE',
	allowedHeaders: 'Content-Type, Accepts, Authorization'
}));


// Initialize DB

const db = require('./src/models/index')

db.sequelize.sync();

// Entry Route

app.get('/', (request, response) => {
	response.send({ data: 'Kanbandingo API!!!' });
});

require('./src/routes/auth.routes')(app);
require('./src/routes/kanban.routes')(app);
require('./src/routes/user.routes')(app);

// Listen on port

app.listen(process.env.PORT, () => {
	console.log(`App running on port ${process.env.PORT}.`);
});