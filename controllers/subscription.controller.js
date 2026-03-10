export const createSubscription = (req, res, next) => {
    try{

        const subscription = await subscription.create(
            {
                ...req.body,
                user: req.user._id,
            }
        )

    }catch(e){

          next(e);

    }

  
}