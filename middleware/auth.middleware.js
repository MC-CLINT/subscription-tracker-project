import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../config/env.js";
import User from "../models/user.model.js";


// someone is making a request get user details -> authorise middleware -> verify token -> if valid  ---> get users
const authorize = async (req, res, next) => {
    try{
        let token;

        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){

            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) res.status(401).json({message: 'unauthorized'});

        const decoded = jwt.verify(token, JWT_SECRET);

        const user = await User.findById(decoded.userid);

        if(!user) res.status(401).json({message: 'unauthorized'});

        req.user = user;

        next();

    }catch(error){

        // 401 stands for unauthorised
        res.status(401).json({ message: "unauthorized", error: error.message})
    }
}

export default authorize;