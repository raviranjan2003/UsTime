import express from "express";

import { fetchMessages, sendMessage } from "../controllers/chat.js";

const router = express.Router();

router.post("/", sendMessage);
router.get("/:chatId", fetchMessages);

export default router;
