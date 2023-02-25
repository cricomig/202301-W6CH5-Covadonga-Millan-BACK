import fs from 'fs/promises';
import { Joke } from '../models/jokes';

const file = './data/jokes.json';

export class JokesFileRepo {
  read(_id: Joke['id']): Promise<Joke[]> {
    return fs
      .readFile(file, { encoding: 'utf-8' })
      .then((data) => JSON.parse(data));
  }

  async readById(id: Joke['id']) {
    const initialData = await fs.readFile(file, {
      encoding: 'utf-8',
    });
    const data: Joke[] = JSON.parse(initialData);
    return data.filter((item) => item.id === id)[0];
  }

  async write(joke: Joke) {
    const initialData = await fs.readFile(file, {
      encoding: 'utf-8',
    });
    const data: Joke[] = JSON.parse(initialData);
    const newId: number =
      data.length > 0 ? Math.max(...data.map((item) => item.id)) : 0;
    joke.id = newId + 1;
    const newData = JSON.stringify([...data, joke]);
    await fs.writeFile(file, newData, {
      encoding: 'utf-8',
    });
  }

  update() {}

  async delete(id: Joke['id']) {
    const initialData = await fs.readFile(file, {
      encoding: 'utf-8',
    });

    const data: Joke[] = JSON.parse(initialData);

    const dataFilter = data.filter((item) => item.id !== id);

    const newData = JSON.stringify(dataFilter);

    await fs.writeFile(file, newData, {
      encoding: 'utf-8',
    });
  }
}
