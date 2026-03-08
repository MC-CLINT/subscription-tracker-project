import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../config/env";
import User from "../models/user.model";


// someone is making a request get user details -> authorise middleware -> verify token -> if valid  ---> get users
const authorize = async (req, res, next) => {
    try{
        let token;

        if(req.headers.authorisation && req.headers.authorisation.startsWith('Bearer')){

            token = req.headers.authorisation.split(' ')[1];
        }

        if (!token) res.status(401).json({message: 'unauthorized'});

        const decoded = jwt.verify(token, JWT_SECRET);

        const user = await User.findById(decoded.userId);

        if(!user) res.status(401).json({message: 'unauthorized'});

        req.user = user;

        next();

    }catch(error){

        // 401 stands for unauthorised
        res.status(401).json({ message: "unauthorized", error: "error.message"})
    }
}

export default authorize;