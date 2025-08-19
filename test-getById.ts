import { PelisCollection } from "./models";

async function probarGetById() {
  const pelis = new PelisCollection();

  const peliEncontrada = await pelis.getById(2); // probamos buscando la peli con id 2
  console.log("Peli encontrada:", peliEncontrada);

  const peliNoExiste = await pelis.getById(9999); // probamos un id que no existe
  console.log("Peli no encontrada (debe ser undefined):", peliNoExiste);
}

probarGetById();
