import MessageModel from "./../models/chat";
// import asyncHandler form 'express-async-handler'

const fetchMessages = asyncHandler(async (req, res) => {
  const { chatId } = req.params;

  if (!chatId) {
    res.status(400);
    throw new Error("Invalid chatId for fetching messages");
  }
  const messages = await MessageModel.find({ chat: chatId })
    .populate({
      path: "sender",
      model: "User",
      select: "-password -notifications",
    })
    .sort({ createdAt: "desc" });

  res.status(200).json(messages);
});

const sendMessage = asyncHandler(async(req,res)=>{
  const {content,chatId} = req.body;
  const loggedInUser = req.user?._id;

  if (!content  || !chatId) {
    res.status(400);
    throw new Error("Invalid request params for sending a message");
  }
  const createdMessage = await MessageModel.create({
    sender: loggedInUser,
    content: content || "",
    chat: chatId,
  });
  
  if (!createdMessage) {
    res.status(404);
    throw new Error("Message not found");
  }

// Update the lastMessage of current chat with newly created message
  const updateChatPromise = MessageModel.findByIdAndUpdate(chatId, {
    lastMessage: createdMessage._id,
  }); 

  const populatedMsgPromise = MessageModel.findById(createdMessage._id)
    .populate({
      path: "sender",
      model: "User",
      select: "-password -notifications",
    })
    .populate({
      path: "chat",
      model: "Chat",
      select: "-groupAdmins -cloudinary_id",
    });
  // Parallel execution of independent promises
  const [updatedChat, populatedMessage] = await Promise.all([
    updateChatPromise,
    populatedMsgPromise,
  ]);

  if (!updatedChat) {
    res.status(404);
    throw new Error("Chat not found while updating lastMessage");
  }
  res.status(201).json(populatedMessage);
})

export default {fetchMessages, sendMessage};
 