const CustomAPIError = require('../errors/custom-error');


const errorHandler = async (err, req, res, next) => {
	if (err instanceof CustomAPIError) {
		return res.status(500).json({ msg: err.message, statusCode: err.statusCode });
	}
	res.status(500).json({ msg: 'Someting went wrong' });
};


module.exports = errorHandler;