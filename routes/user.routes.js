import { Router } from "express";
import { getUsers, getUser } from "../controllers/user.controller";

const userRouter = Router();

userRouter.get('/users', getUsers);

userRouter.get('/users/:id', getUser);

userRouter.post('/', (req, res)=> res.send("CREATE new user "));

userRouter.put('/users/:id', (req, res)=> res.send("UPDATE user details"));

userRouter.delete('/:id', (req, res)=> res.send("DELETE user"));


export default userRouter;