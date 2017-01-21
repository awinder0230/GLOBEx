import { Router } from 'express';

//import articleRouter from './article';
import homeRouter from './home';
import userRouter from './users';

const router = new Router();

//router.use('/articles', articleRouter);
router.use('/home', homeRouter);
router.use('/users', userRouter);

export default router;
