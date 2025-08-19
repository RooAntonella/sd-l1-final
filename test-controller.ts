import { PelisController } from "./controllers";

async function testController() {
  const controller = new PelisController();

  console.log("Todas las pelis:");
  console.log(await controller.get({}));

  console.log("Buscar por título 'sh':");
  console.log(await controller.get({ search: { title: "sh" } }));

  console.log("Buscar por tag 'comedy':");
  console.log(await controller.get({ search: { tag: "comedy" } }));

  console.log("Buscar por ID 3:");
  console.log(await controller.get({ id: 3 }));

  console.log("Agregar nueva peli:");
  console.log(
    await controller.add({
      id: 6,
      title: "Barbie",
      tags: ["comedy", "fantasy"],
    })
  );
}

testController();
