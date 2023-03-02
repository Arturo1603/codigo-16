

// const myChart = new Chart(barChart, {
//     type: "pie",
//     data: {
//         labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
//         datasets: [
//             {
//                 label: "Meses del año",
//                 data: [10, 12, 5, 4, 10, 16, 8, 19, 20, 8, 17, 3],
//                 backgroundColor: ["#E9A36F", "#87C975", "#647EA7", "#6A3A7B"],
//                 borderColor: "#c9c9c9", //["#000", "#f01", "#aac", "#019"],
//                 borderWidth: 1,
//             }
//         ]
//     }
// });

const selectChart = document.querySelector("#select-chart");

const chartTaskReport = document
  .querySelector("#task-chart-report")
  .getContext("2d");

let myChart = generateChart();

selectChart.onchange = (event) => {
  myChart.destroy();
  myChart = generateChart(event.target.value);
  updateCalcChart();
};

function generateChart(type = "doughnut") {
  return new Chart(chartTaskReport, {
    type,
    data: {
      labels: ["TODO", "DONE", "DELETE"],
      datasets: [
        {
          // data: [10, 11, 12] // data[0] = 10 data[1] = 11 data[2] = 12
          label: "Estados de tareas",
          backgroundColor: ["#25A9FF", "#00C45F", "#FF6674"],
        },
      ],
    },
  });
}

function updateCalcChart() {
  const countTODO = getCountTask("todo");
  const countDONE = getCountTask("done");
  const countDelete = getCountTask("delete");

  myChart.data.datasets[0].data[0] = countTODO;
  // {
  //   data: [countTODO]
  //   label: "Estados de tareas",
  //   backgroundColor: ["#25A9FF", "#00C45F", "#FF6674"],
  // },
  myChart.data.datasets[0].data[1] = countDONE;
  // {
  //   data: [countTODO, countDONE]
  //   label: "Estados de tareas",
  //   backgroundColor: ["#25A9FF", "#00C45F", "#FF6674"],
  // },
  myChart.data.datasets[0].data[2] = countDelete;
  // {
  //   data: [countTODO, countDONE, countDelete]
  //   label: "Estados de tareas",
  //   backgroundColor: ["#25A9FF", "#00C45F", "#FF6674"],
  // },
  myChart.update();
}

// esta funcion filtra por el estado y retorna la cantidad de elementos encontrados
function getCountTask(status) {
  const tasks = arrayTask.filter((task) => task.status === status);
  return tasks.length;
}