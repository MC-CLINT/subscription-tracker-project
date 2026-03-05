import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'username is required'],
        trim: true,
        minLength: 2,
        maxLength: 50
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        lowercase: true,
        match:[/\S+@\S+\.\S+/, 'Please use a valid email address']
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minLength: 8,
        maxLength: 100
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;
