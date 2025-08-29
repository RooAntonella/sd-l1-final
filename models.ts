import * as jsonfile from "jsonfile";
import * as path from "path";

const FILE_PATH = path.resolve(__dirname, "pelis.json");


type Peli = {
  id: number;
  title: string;
  tags: string[];
};

type SearchOptions = {
  title?: string;
  tag?: string;
};

class PelisCollection {
  async getAll(): Promise<Peli[]> {
    const pelis = await jsonfile.readFile(FILE_PATH);
    return pelis;
  }

  async getById(id: number): Promise<Peli | undefined> {
    const pelis = await this.getAll();
    return pelis.find((peli) => peli.id === id);
  }

  async add(peli: Peli): Promise<boolean> {
    const peliExistente = await this.getById(peli.id);
    if (peliExistente) {
      return false;
    }
    const pelis = await this.getAll();
    pelis.push(peli);
    try {
      await jsonfile.writeFile(FILE_PATH, pelis);
      return true;
    } catch (error) {
      return false;
    }
  }

  async search(options: SearchOptions): Promise<Peli[]> {
    const pelis = await this.getAll();
    return pelis.filter((peli) => {
      let cumple = true;
      if (options.title) {
        cumple = cumple && peli.title.toLowerCase().includes(options.title.toLowerCase());
      }
      if (options.tag) {
        cumple = cumple && peli.tags.includes(options.tag);
      }
      return cumple;
    });
  }
}

export { PelisCollection, Peli, SearchOptions };

