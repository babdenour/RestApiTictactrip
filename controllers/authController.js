const authService = require("../services/authService");

module.exports.sign_in = (req, res) => {
	res.render("auth");
};

module.exports.post = (req, res) => {
	authService.log(req, res);
	// console.log(req);
	res.render("index");
};
