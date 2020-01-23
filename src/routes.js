import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserControler from './app/controllers/UserController';
import SessionControler from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';

import authMiddeware from './app/middlewares/auth';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserControler.store);
routes.post('/sessions', SessionControler.store);

routes.use(authMiddeware);

routes.put('/users', UserControler.update);
routes.get('/providers', ProviderController.index);
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
