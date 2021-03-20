module.exports.log = (req, res) => {
	let { email, pswd } = req.body;

	console.log(email, pswd);
};
