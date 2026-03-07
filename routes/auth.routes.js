import { Router } from 'express'

import authController from '../controllers/auth.controller.js';

const authRouter = Router();  


authRouter.post('/sign-up', signUp);

authRouter.post('/sign-in', signIn)

authRouter.post('/sign-out', signOut);


export default authRouter;