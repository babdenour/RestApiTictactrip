const express = require("express");

const router = express.Router();
const justifyController = require("../controllers/justifyController");
const authController = require("../controllers/authController");

router.get("/", (req, res) => {
	res.render("index");
});

//Route...justify
router.get("/api/justify", justifyController.justify_get);
router.post("/api/justify", justifyController.justify_post);

//Route...Auth
router.get("/api/auth", authController.sign_in);
router.post("/api/token", authController.post);

module.exports = router;
