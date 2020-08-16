const express = require("express");

const { getReplies, newReply } = require("../controllers/reply");

const router = express.Router();

router.post("/", getReplies);
router.post("/create", newReply);

module.exports = router;
