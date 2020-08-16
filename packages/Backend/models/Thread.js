const mongoose = require("mongoose");
const uuid = require("uuid");

const ThreadSchema = new mongoose.Schema({
  createdBy: {
    type: String,
    required: true,
  },
  threadId: { type: String, default: uuid.v4() },
  question: { type: String, required: true },
  replies: { type: mongoose.Schema.ObjectId, ref: "Reply" },
  createdAt: {
    type: Number,
    default: Math.round(new Date().getTime() / 1000),
    required: true,
  },
});
//label is the name of the food
module.exports = mongoose.model("Thread", ThreadSchema);
