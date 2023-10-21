require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');

const mainRouter = require('./routes/main');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');



// middleware
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1', (mainRouter));

app.use(notFound);
app.use(errorHandler);




const PORT = process.env.PORT || 3000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(PORT, () => {
			console.log(`Server is listening on port ${PORT}...`);
		})
	} catch (error) {
		console.log(error);
	}
};

start();