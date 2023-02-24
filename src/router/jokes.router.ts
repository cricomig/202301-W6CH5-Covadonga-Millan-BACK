import { Router } from 'express';
import { JokesController } from '../controllers/controller.js';
import { JokesFileRepo } from '../repository/jokes.file.repo.js';

// eslint-disable-next-line new-cap
export const jokesRouter = Router();
const repo = new JokesFileRepo();
const controller = new JokesController(repo);

jokesRouter.get('/', controller.getAll.bind(controller));
jokesRouter.get('/:idJoke', controller.get.bind(controller));
jokesRouter.post('/', controller.post.bind(controller));
jokesRouter.patch('/', controller.patch.bind(controller));
jokesRouter.delete('/:idJoke', controller.delete.bind(controller));
