import Joi from '@hapi/joi';
import {IUser} from '../interfaces/User'

export const signinValidation = (data: IUser) => {
    const userSchema = Joi.object({
        email: Joi
            .string()
            .required(),
        password: Joi
            .string()
            .min(6)
            .required()
    });
    return userSchema.validate(data);
};
