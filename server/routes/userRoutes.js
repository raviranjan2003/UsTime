import express from 'express';
import { setProfilePicture } from '../controllers/user.js';

const router = express.Router();

router.post('/avatar/:id', setProfilePicture);

export default router;