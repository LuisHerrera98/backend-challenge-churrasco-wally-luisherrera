import { Router } from 'express';
import { login, getAllUser } from '../controllers/auth.controller'
import {TokenValidation} from '../libs/verifyToken'

const router: Router = Router();

// router.post('/signup', signup)
router.post('/login', login)


/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          description: the auto-generated id of product
 *        username:
 *          type: string
 *          description: username of the user
 *        email:
 *          type: string
 *          description: the email of the user
 *        password:
 *          type: string
 *          description: the password of the user
 *        lastLogin:
 *          type: string
 *          description: the last login of the user
 *        role:
 *          type: string
 *          description: rol of the user
 *        active:
 *          type: boolean
 *          description: activate acount of user
 *        firstName:
 *          type: string
 *          description: name
 *        lastName:
 *          type: string
 *          description: lastname
 *        birthday: 
 *          type: string
 *          description: the birthday of the user
 *        
 *      example:
 *        _id: "60523289102a4b5308c80349"
 *        username: "challenge"
 *        email: "challenge@chrr.cc"
 *        password: "26f2afb0a84f611dfc15f68feadc815f794b3081db3c230e293787c5124ac1a4"
 *        lastLogin: "2022-10-24T09:06:40.117Z"
 *        role: "admin"
 *        active: true
 *        firstName: "luis"
 *        lastName: "herrera"
 *        birthday: "1998-03-27T03:00:00.000Z"
 *  
 */

/**
 * @swagger
 * tags:
 *  name: User
 *  description: Users endpoint
 */

/**
 * @swagger
 * /api/auth/users:
 *  get:
 *    summary: Returns a list of users
 *    tags: [User]
 *    responses:
 *      200:
 *        description: the list of users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 */
router.get('/users', getAllUser)

export default router;