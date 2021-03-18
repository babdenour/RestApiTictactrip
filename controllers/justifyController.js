const moment = require("moment");

const justifyService = require("../services/justifyService");

let message = [];
let allMessage = "";
const rateMax = 80000;
const justifyLineLength = 80;

module.exports.justify_get = (req, res) => {
	res.render("justify");
};

module.exports.justify_post = (req, res) => {
	//ContentType text/plain
	let newMessage = req.body.msg;
	let date = parseInt(moment().format("DD"));

	if (justifyService.verify(rateMax, allMessage, date)) {
		message = justifyService.justifyLine(newMessage, justifyLineLength);
		allMessage += message;
		res.render("justify", { msg: allMessage, date: date });
	} else {
		res.status(402).send("erreur: Payment Required");
	}
};
