import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true,
        lowercase:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required:true,
        minlength: 6,
        maxlength:20
    }
}, {timestamps: true});

export const User = mongoose.mosel('User', userSchema)