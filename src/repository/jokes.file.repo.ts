import fs from 'fs/promises';

const file = './data/data.json';

export class JokesFileRepo {
  read() {
    return fs
      .readFile(file, { encoding: 'utf-8' })
      .then((data) => JSON.parse(data) as any[]);
  }

  write() {}
  update() {}
  delete() {}
}
