const express = require('express');
const cors = require('cors');

const port = 8080;

// Initialize App

const app = express();

// Apply Middleware

app.use(express.urlencoded({
	extended: true,
}));
app.use(express.json());
app.use(cors());

// Initialize DB

const db = require('./src/models/index')

db.sequelize.sync();

// Entry Route

app.get('/', (request, response) => {
	response.send({ data: 'Kanbandingo API!!!' });
});

//require('./app/routes/auth.routes')(app);
require('./src/routes/kanban.routes')(app);

// Listen on port

app.listen(port, () => {
	console.log(`App running on port ${port}.`);
});