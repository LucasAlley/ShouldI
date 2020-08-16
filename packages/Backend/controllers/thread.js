const asyncHandler = require("../middleware/async");
const Thread = require("../models/Thread");
const Filter = require("bad-words");

exports.getThreads = asyncHandler(async (req, res, next) => {
  let threads = await Thread.find();

  threads = threads.sort((a, b) => b.createdAt - a.createdAt);

  return res.status(200).json({ success: true, threads });
});

exports.createThread = asyncHandler(async (req, res, next) => {
  let filter = new Filter();

  req.body.question = filter.clean(req.body.question);

  const thread = await Thread.create(req.body);

  return res.status(201).json({ success: true, thread });
});
