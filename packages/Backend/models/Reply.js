const mongoose = require("mongoose");

const ReplySchema = new mongoose.Schema({
  createdBy: {
    type: String,
    required: true,
  },
  reply: { type: String, required: true },
  replyTo: { type: String },
  thread: { type: mongoose.Schema.ObjectId, ref: "Thread", required: true },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});
//label is the name of the food
module.exports = mongoose.model("Reply", ReplySchema);
