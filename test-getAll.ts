import { PelisCollection } from "./models";

async function probarGetAll() {
  const pelis = new PelisCollection();
  const todas = await pelis.getAll();
  console.log("Películas encontradas:", todas);
}

probarGetAll();
