const justify = require("./justify.js");

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/views", express.static("public"));

//route
app.get("/", function (req, res) {
	res.render("home");
});
app.get("/api/justify", function (req, res) {
	res.send("justify");
});

//functions
const text = `Hello I'm Abdenour here for you!sdf gds sdwrahvre sf rgwdgwrgwvfwef ewrff aygasd abdenour bensouna for tfweft ofs ddds a vre sf udjksncxjkfwdnsjkn jwdsnfjsdkbg vshckxbeudsj uHello I'm Abdenour here for you!sdf gds sdwrahvre sf rgwdgwrgwvfwef ewrff aygasd abdenour bensouna for tjlnafscln abdenour bensouna`;

justify.justifyLine(text);

//server
app.listen(3000, () => {
	console.log("Server running...");
});
