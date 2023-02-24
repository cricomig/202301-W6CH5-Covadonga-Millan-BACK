import { Response, Request } from 'express';
import { JokesFileRepo } from '../repository/jokes.file.repo.js';

export class JokesController {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars
  constructor(public repo: JokesFileRepo) {}

  getAll(_req: Request, resp: Response) {
    this.repo.read().then((data) => {
      resp.json(data);
    });
  }

  get(req: Request, resp: Response) {
    resp.send('This is thing ' + req.params.id);
  }

  post(_req: Request, _resp: Response) {}

  patch(_req: Request, _resp: Response) {}

  delete(_req: Request, _resp: Response) {}
}
