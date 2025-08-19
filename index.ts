import minimist from "minimist";
import { PelisController } from "./controllers";

async function main() {
  const controller = new PelisController();
  const args = minimist(process.argv.slice(2));

  // El primer parámetro que no es flag será el comando o id
  const comando = args._[0];

  if (!comando) {
    // Si no se pone comando, mostrar todas las pelis
    const pelis = await controller.get();
    console.log(pelis);
    return;
  }

  if (comando === "add") {
    // Agregar peli
    if (!args.id || !args.title || !args.tags) {
      console.log(
        "Faltan parámetros para agregar la peli: --id --title --tags (puede repetirse --tags)"
      );
      return;
    }
    const nuevaPeli = {
      id: Number(args.id),
      title: args.title,
      tags: Array.isArray(args.tags) ? args.tags : args.tags.split(","),
    };
    const result = await controller.add(nuevaPeli);
    console.log(result);
    return;
  }

  if (comando === "get") {
    // Buscar por id con npx tsx ./src/index.ts get 4411 o get --id=4411
    // Soporte para comando seguido por id o con flag --id
    const idArg = args.id || Number(args._[1]);
    if (!idArg) {
      console.log("Falta el ID para el comando get");
      return;
    }
    const peli = await controller.get({ id: Number(idArg) });
    console.log(peli);
    return;
  }

  if (comando === "search") {
    // Buscar por título y/o tag
    const search: { title?: string; tag?: string } = {};
    if (args.title) search.title = args.title;
    if (args.tag) search.tag = args.tag;

    const pelis = await controller.get({ search });
    console.log(pelis);
    return;
  }

  // Si llega aquí es porque el comando no se reconoció
  console.log(`Comando '${comando}' no reconocido.`);
}

main();
