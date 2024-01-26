require("colors");

const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const { guardarBD, leerBD } = require("./helpers/saveFile");
const Tareas = require("./models/tareas");

//console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  const tareasBD = leerBD();

  await pausa();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        const desc = await leerInput("Descripción: ");
        tareas.crearTarea(desc);
        break;

      case 2:
        console.log(tareas.listadoArr);
        break;
    }

    guardarBD(tareas.listadoArr);

    await pausa();
    //console.log({ opt });
  } while (opt !== 0);
};

main();
