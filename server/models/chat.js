import mongoose from "mongoose";

const { ObjectId } = Schema.Types;

const chatMessageSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: [true, "A chat cannot exist without a person name."],
  },
  content: {
    type: String,
    trim: true,
  },
  chat: {
    type: ObjectId,
    ref: "Chat",
  },
  dp: {
    type: [String],
    trim: true,
  },
  lastMessage: { type: ObjectId, ref: "Message" },
  sendTime: {
    type: Date,
    default: Date.now(),
  },
});

const MessageModel = mongoose.model("Message", chatMessageSchema);

export default MessageModel;
