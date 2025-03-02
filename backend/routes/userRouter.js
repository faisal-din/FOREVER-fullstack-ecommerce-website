import express from 'express';

import {
  loginUser,
  registerUser,
  adminLogin,
} from '../controllers/userController.js';

const userRouter = express.Router();

// /api/user/login
userRouter.post('/login', loginUser);

// /api/user/register
userRouter.post('/register', registerUser);

// /api/user/admin
userRouter.post('/admin', adminLogin);

export default userRouter;
