const asyncHandler = require("../middleware/async");
const Reply = require("../models/Reply");
const Filter = require("bad-words");
//test making io a middleware
exports.getReplies = asyncHandler(async (req, res, next) => {
  const replies = await Reply.find({ thread: req.body.threadId });
  return res.status(200).json({ success: true, replies });
});

exports.newReply = asyncHandler(async (req, res, next) => {
  let filter = new Filter();
  req.body.reply = filter.clean(req.body.reply);
  const replyToUser = req.body.reply.includes("@");
  let newReply;

  if (replyToUser) {
    let replyTo = req.body.reply.slice(req.body.reply.indexOf("@"), 8);
    let reply = req.body.reply.replace(replyTo, "");

    newReply = await Reply.create({ thread: req.body.thread, reply, replyTo });
  } else {
    newReply = await Reply.create(req.body);
  }

  return res.status(201).json({ success: true, newReply });
});
/*
were keeping track of

[]the # of threads
[]up/down vote

when a new thread is created we can emit it in the function thatll call the server to get updated values

when a up/down vote happens same thing, emit in the func, values get updated
*/
