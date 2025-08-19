import { PelisCollection } from "./models";

async function probarSearch() {
  const pelis = new PelisCollection();

  console.log("\nBuscar por título que incluya 'ti':");
  let resultado = await pelis.search({ title: "ti" });
  console.log(resultado);

  console.log("\nBuscar por tag 'drama':");
  resultado = await pelis.search({ tag: "drama" });
  console.log(resultado);

  console.log("\nBuscar por título 'ti' y tag 'drama':");
  resultado = await pelis.search({ title: "ti", tag: "drama" });
  console.log(resultado);

  console.log("\nBuscar sin filtros (debería devolver todas):");
  resultado = await pelis.search({});
  console.log(resultado);
}

probarSearch();
