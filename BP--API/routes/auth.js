const express = require("express");
const router = require("express").Router();
const authRoute = require("express").Router();
const authController = require("../controllers/authController");

//@route get /api/auth/test
//@desc Create a new user
//@access Public
router.get("/test", authController.test);

module.exports = router;
