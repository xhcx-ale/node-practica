const inquirer = require("inquirer");
require("colors");

const preguntas = [
  {
    type: "list",
    name: "option",
    message: "¿Que desea hacer?",
    choices: [
      {
        value: 1,
        name: `${"1.".green} Crear tarea.`,
      },
      {
        value: 2,
        name: `${"2.".green} Listar tareas.`,
      },
      {
        value: 3,
        name: `${"3.".green} Listar tareas completadas.`,
      },
      {
        value: 4,
        name: `${"4.".green} Listar Pendientes.`,
      },
      {
        value: 5,
        name: `${"5.".green} Completar tarea(s).`,
      },
      {
        value: 6,
        name: `${"6.".green} Borrar tareas.`,
      },
      {
        value: 0,
        name: `${"0.".red} Salir.'`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log(`====================================
            ${"Opción:".cyan}
====================================\n`);

  const { option } = await inquirer.prompt(preguntas);
  return option;
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "parar",
      message: `Presione ${"ENTER".magenta} para continuar.`,
    },
  ];
  await inquirer.prompt(question);
};

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Ingresa un valor.";
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
};
