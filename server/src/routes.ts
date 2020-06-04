import express, { request } from 'express';
import PointsController from './controllers/PointsController';
import ItensController from './controllers/itensController';

const routes = express.Router();
const pointsController = new PointsController();
const itensController = new ItensController();

routes.get('itens', itensController.index);

//index - exibe uma lista
//show - exibe um único registro
routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
export default routes;