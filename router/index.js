const express = require("express");
const moment = require("moment");

const router = express.Router();
const justify = require("../justify");

//Route...Get
router.get("/", (req, res) => {
	res.render("index");
});
router.get("/api/justify", (req, res) => {
	res.render("justify");
});

let message = [];
let allMessage = "";
const rateMax = 80000;
const justifyLineLength = 80;

//Route...Post
router.post("/api/justify", (req, res) => {
	let newMessage = req.body.msg;
	let date = parseInt(moment().format("DD"));

	if (justify.verify(rateMax, allMessage, date)) {
		message = justify.justifyLine(newMessage, justifyLineLength);
		allMessage += message;
		//console.log(justify.verify(rateMax, allMessage, date));
		res.render("justify", { msg: allMessage, date: date });
	} else {
		res.status(402).send("erreur: Payment Required");
	}
});

module.exports = router;
