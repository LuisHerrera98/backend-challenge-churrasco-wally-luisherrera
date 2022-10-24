import { Router } from 'express';
import { login, getAllUser } from '../controllers/auth.controller'

const router: Router = Router();



import'./swagger'

/**
 * @swagger
 * tags:
 *  name: User
 *  description: User APIs
 */

/**
 * @swagger
 * /api/auth/users: 
 *  get:
 *    summary: RETURN LIST OF USERS
 *    tags: [User]
 *    responses:
 *      200:
 *        description: GET ALL USERS
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'

 *  

 * 
 */
router.get('/users', getAllUser)
/**
 * @swagger
 *  components:
 *      schema:
 *          UserLogin:
 *              type: object
 *              properties:
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string
 *              example:
 *                  email: "challenge@chrr.cc"
 *                  password: "ch411enge"
 */

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *    summary: LOGIN USER
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *             schema:
 *                 $ref: '#/components/schema/UserLogin'
 * 
 *    responses:
 *      200:
 *        description: Login success
 * 
 */

router.post('/login', login)

export default router;