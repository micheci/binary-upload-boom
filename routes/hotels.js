const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const hotelsController = require("../controllers/hotels");

//Main Routes - simplified for now

router.get("/", ensureAuth, hotelsController.getHotels);

module.exports = router;
