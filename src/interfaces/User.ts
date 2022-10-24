import { Document } from "mongoose";

export interface IUser extends Document{
    username: string;
    email: string;
    password: string;
    lastLogin: Date;
    role: string;
    active: boolean;
    firstName: string;
    lastName: string;
    birthday: Date;
    validatePassword(password: string): boolean;
}
