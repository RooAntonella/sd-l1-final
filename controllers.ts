import { PelisCollection, Peli } from "./models";

type SearchOptions = {
  title?: string;
  tag?: string;
};

class PelisController {
  peliModel: PelisCollection;

  constructor() {
    this.peliModel = new PelisCollection();
  }

  async get(options?: { id?: number; search?: SearchOptions }): Promise<Peli[]> {
    if (!options) {
      return this.peliModel.getAll();
    }
    if (options.id) {
      const peli = await this.peliModel.getById(options.id);
      return peli ? [peli] : [];
    }
    if (options.search) {
      return this.peliModel.search(options.search);
    }
    return [];
  }

  async getOne(options: { id?: number; search?: SearchOptions }): Promise<Peli | undefined> {
    const result = await this.get(options);
    return result[0];
  }

  async add(peli: Peli): Promise<boolean> {
    return this.peliModel.add(peli);
  }
}

export { PelisController };
