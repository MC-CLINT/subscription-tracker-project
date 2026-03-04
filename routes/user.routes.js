import { Router } from "express";

const userRouter = Router();

userRouter.get('/users', ()=> res.send("GET all users"));

userRouter.get('/users/:id', ()=> res.send("GET user details"));

userRouter.post('/', ()=> res.send("CREATE new user "));

userRouter.put('/users/:id', ()=> res.send("UPDATE user details"));

userRouter.delete('/:id', ()=> res.send("DELETE user"));


export default userRouter;