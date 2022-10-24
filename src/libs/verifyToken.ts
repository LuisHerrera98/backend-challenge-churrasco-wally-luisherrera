import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { IPayload } from 'interfaces/Payload';


export const TokenValidation = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.replace(/['"]+/g, '');
        if (!token) return res.status(401).json('Access Denied');
        const payload = jwt.verify(token, process.env['TOKEN_SECRET'] || '') as IPayload;
        req.userId = payload._id; // get user: _id from req for all aplication that use this middleware
        next();
    } catch (e) {
        res.status(400).send('Invalid Token');
    }
}