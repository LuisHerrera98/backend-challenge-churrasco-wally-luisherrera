import Joi from '@hapi/joi';
import {IProduct} from '../interfaces/Product'

export const createProductValidation = (data: IProduct) => {
    const productSchema = Joi.object({
        SKU: Joi
            .string()
            .required(),
        code: Joi
            .number(),
        name: Joi
            .string()
            .required(),
        description: Joi
            .string(),
        pictures: Joi
            .any()
            .required(),
        price: Joi
            .number()
            .required(),
        currency: Joi
            .string()
            .required(),
    });
    return productSchema.validate(data);
};