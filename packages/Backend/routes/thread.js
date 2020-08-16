const express = require("express");

const { getThreads, createThread } = require("../controllers/thread");

const router = express.Router();

router.get("/", getThreads);
router.post("/create", createThread);

module.exports = router;
