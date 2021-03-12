const express = require("express");
const app = express();

app.get("/", function (req, res) {
	res.send("hello");
});
app.get("/api/justify", function (req, res) {
	res.send("justify");
});

app.listen(3002, () => {
	console.log("Server running...");
});
