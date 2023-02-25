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

  getById(req: Request, resp: Response) {
    const jokeNum = Number(req.params.id);

    this.repo
      .readById(jokeNum)
      .then((data) =>
        data === undefined
          ? resp.status(404).send(`<p>Error, joke num ${jokeNum} not found</p>`)
          : resp.status(200).json(data)
      );
  }

  async write(req: Request, resp: Response) {
    const newJoke = req.body;
    await this.repo.write(newJoke);
    resp.sendStatus(200);
  }

  patch(_req: Request, _resp: Response) {}

  delete(_req: Request, _resp: Response) {}
}
