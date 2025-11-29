const express = require("express");
const router = express.Router();

const { createUser, getUser } = require("../controllers/userController");

router.post("/", createUser);      // Create user + QR
router.get("/:slug", getUser);     // View user details

module.exports = router;
