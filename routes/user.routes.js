import { Router } from "express";

const userRouter = Router();

userRouter.get('/users', (req, res)=> res.send("GET all users"));

userRouter.get('/users/:id', (req, res)=> res.send("GET user details"));

userRouter.post('/', (req, res)=> res.send("CREATE new user "));

userRouter.put('/users/:id', (req, res)=> res.send("UPDATE user details"));

userRouter.delete('/:id', (req, res)=> res.send("DELETE user"));


export default userRouter;