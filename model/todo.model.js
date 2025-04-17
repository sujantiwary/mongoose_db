import mongoose from 'mongoose';
import { User } from './user.model';

const todoSchema=new mongoose.Schema({
    content:{
        type: String,
    },
    createdBy:{
        type: mongoose.Type.ObjectId,
        ref: User
    }
},{timestamps:true});

export const Todo = mongoose.model("Todo", todoSchema);