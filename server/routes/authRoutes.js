import express from "express";
import { Register } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", Register);

export default router;