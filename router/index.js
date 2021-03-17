const express = require("express");
const bodyParser = require("body-parser");
const moment = require("moment");

const router = express.Router();
const justify = require("../justify");

router.use(bodyParser.json({ limit: "20mb" }));
router.use(
	bodyParser.urlencoded({
		extended: true,
		limit: "20mb",
		parameterLimit: 100000,
	})
);

//Route...Get
router.get("/", (req, res) => {
	res.render("index");
});
router.get("/api/justify", (req, res) => {
	if (res.statusCode == 402) {
		console.log("ici");
		res.redirect("/");
	} else {
		console.log("labas");
		res.render("justify");
	}
});

let message = [];
let allMessage = "";
const rateMax = 80000;
const justifyLineLength = 80;
//Route...Post
router.post("/api/justify", (req, res) => {
	let newMessage = req.body.msg;
	let date = moment().format();
	if (justify.verify(rateMax, allMessage, date) === 1) {
		message = justify.justifyLine(newMessage, justifyLineLength);
		allMessage += message;

		console.log(justify.verify(rateMax, allMessage, date));
		res.render("justify", { msg: allMessage, date: date });
		//console.log(message);
	} else {
		res.status(402).send("erreur: Payment Required");
	}
});

//functions
//const text = `Hello I'm Abdenour here for you!sdf gds sdwrahvre sf rgwdgwrgwvfwef ewrff aygasd abdenour bensouna for tfweft ofs ddds a vre sf udjksncxjkfwdnsjkn jwdsnfjsdkbg vshckxbeudsj uHello I'm Abdenour here for you!sdf gds sdwrahvre sf rgwdgwrgwvfwef ewrff aygasd abdenour bensouna for tjlnafscln abdenour bensouna`;

module.exports = router;
