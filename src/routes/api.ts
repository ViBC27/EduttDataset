import getApiMiddleware from '../middlewares/getApi';
import { Router } from 'express';

const apiRouter = Router();
apiRouter.get('/', getApiMiddleware);

export default apiRouter;
