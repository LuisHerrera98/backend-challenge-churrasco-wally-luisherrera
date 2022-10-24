import {Schema, model} from 'mongoose'
import {IUser} from '../interfaces/User'
import crypto from "crypto";


const User = new Schema({
    username:{
        type: String,
        required: true,
        min: 4,
        lowercase: true
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true
    },
    lastLogin:{
        type: Date
    },
    role:{
        type: String
    },
    active:{
        type: Boolean
    },
    firstName:{
        type: String
    },
    lastName: {
        type: String
    },
    birthday:{
        type: Date
    }
})

User.methods.validatePassword = function (password: string): boolean {
    const hash = crypto
    .createHash("SHA256")
    .update(password)
    .digest()
    .toString("hex");
    
    if(hash === this.password){
        return true
    } else{
        return false
    }
};

export default model<IUser>('User', User);