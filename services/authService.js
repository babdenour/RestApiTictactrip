module.exports.log = (req, res) => {
	let email = req.body.email;
	let pswd = req.body.pswd;
	console.log(email, pswd);
};
