import mongoose from "mongoose"


export const signUp = async (req, res, next) => {
    const session = mongoose.startSession();
    session.startTransaction();

    try{








        (await session).commitTransaction
    } catch(error){
        await (await session).abortTransaction();
        await session.endSession();
        next(error);
    }
    // Implement logic here
}

export const signIn = async (req, res, next) => {}


export const signOut = async (req, res, next) => {}