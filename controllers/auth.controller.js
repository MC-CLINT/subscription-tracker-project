import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from '../models/user.model.js';
import jwt from "jsonwebtoken";
import { JWT_EXPIRES_IN } from "../config/env";



// what is a req.body --> req.body is an object conaining data from the client (POST REQUEST)
export const signUp = async (req, res, next) => {
    const session = mongoose.startSession();
    session.startTransaction();

    try{
        const {name, email, password} = req.body;

        //checks if  a user already exists
        const existingUser = await User.findOne({email})

        if(existingUser) {
            const error = new Error('User already exists');
            error.statusCode = 409;
            throw error;
        }


        // Hashing Password
        // nb: salt is a complexity used in randomising your hash password

        const salt = await bcrypt.genSalt(10);
        const hashedPassword =  await bcrypt.hash(password, salt);

        //create new user
        const newUser = await user.create([{name, email, password: hashedPassword}], { session });

        const token = jwt.sign({userid: newUser[0]._id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});

        (await session).commitTransaction
        session.endSession();

        res.status(201).json({
            success: true,
            message: 'User created Successfully',
            data: {
                token,
                user: newUsers[0],
            }
        })

    } catch(error){
        await (await session).abortTransaction();
        await session.endSession();
        next(error);
    }
}

export const signIn = async (req, res, next) => {}


export const signOut = async (req, res, next) => {}