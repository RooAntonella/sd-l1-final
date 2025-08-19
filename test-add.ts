import { PelisCollection, Peli } from "./models";

async function probarAdd() {
  const pelis = new PelisCollection();

  const nuevaPeli: Peli = {
    id: 4,
    title: "Inception",
    tags: ["sci-fi", "thriller"],
  };

  const resultadoAdd = await pelis.add(nuevaPeli);
  console.log("Agregar peli nueva (debería ser true):", resultadoAdd);

  // Intentar agregar la misma peli otra vez (ID duplicado)
  const resultadoAddDuplicado = await pelis.add(nuevaPeli);
  console.log("Agregar peli duplicada (debería ser false):", resultadoAddDuplicado);
}

probarAdd();
