import { Router } from 'express';
import { create, getAll, getOne } from '../controllers/product.controller'
import { TokenValidation } from '../libs/verifyToken';

const router: Router = Router();

router.get('/', TokenValidation, getAll)


router.get('/:id', TokenValidation, getOne)
router.post('/create', TokenValidation, create)

export default router;