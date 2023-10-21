const CustomAPIError = require("../errors/custom-error");



const login = async (req, res) => {
	const { username, password } = req.body;
	
	if (!username || !password) {
		throw new CustomAPIError('Username and password are required', 400);
	}
	res.send('Fake login/register');
};

const dashboard = async (req, res) => {
	const luckyNumber = Math.floor(Math.random() * 100);
	res.status(200).json({ msg: `Hi!`, secret: `Your lucky number is ${luckyNumber}` });
}



module.exports = {
	login,
	dashboard
};