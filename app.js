const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const router = require("./router");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
		limit: "20mb",
		parameterLimit: 100000,
	})
);

//set view engine for render
app.set("view engine", "ejs");
//set folder of views
app.use("/views", express.static("public"));
//open cors
app.use(cors());
//router
app.use(router);

//server
app.listen(port || 3002, () => {
	console.log(`Server running... on http://localhost:${port}`);
});
