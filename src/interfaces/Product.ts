import { Document } from "mongoose";

export interface IProduct extends Document{
    SKU: string;
    code?: number;
    name: string;
    description?: string;
    pictures: Array<string>;
    price: number;
    currency: string;
}
