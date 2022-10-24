import {Schema, model} from 'mongoose'
import {IProduct} from '../interfaces/Product'


const Product = new Schema({
    SKU:{
        type: String,
        required: true,
        min: 4,
        lowercase: true
    },
    code:{
        type: Number,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    pictures:{
        type: Array<string>,
        required: true
    },
    price:{
        type: Number
    },
    currency:{
        type: String
    }
})

export default model<IProduct>('Product', Product);