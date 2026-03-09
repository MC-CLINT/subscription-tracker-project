import aj from "../config/arcjet.js";


const arcjetMiddleware = async (req, res, next) =>{
    try{
        // protecting request and coming up with a decision
        const decision = await aj.protect(req, {requested: 1});

        // Let's now check the status of decision and the reason
        if(decision.isDenied()){
            if(decision.reason.isRateLimit()) return res.status(429).json({ message: "Rate Limit Reached" });
            if(decision.reason.isBot()) return res.status(403).json({ message: "Bot Detected" });

            return res.status(403).json({error: 'Access Denied'});
        }
        next();

    }catch(error){
        console.log(`Arcjet Middleware Error: ${error}`);
        next(error)
    }
}


export default arcjetMiddleware;