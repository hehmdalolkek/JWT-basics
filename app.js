require('dotenv').config();

const express = require('express');
const app = express();

const connectDB = require('./db/connect');

const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');
const CustomAPIError = require('./errors/custom-error');



// middleware
app.use(express.json());

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