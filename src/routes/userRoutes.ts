import { Router } from 'express';
import { register, login, listUsers } from '../controllers/UserController';
import { authenticate } from '../middlewares/auth';
import { registerValidation } from '../validations/userValidation';
import { validate } from '../validations/validate';

const router = Router();

router.post('/register', registerValidation, validate, register);
// router.post('/login', login);
// router.get('/users', authenticate, listUsers);

export default router;
