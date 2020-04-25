import Chart from "chart.js";
import { Paired12 } from "chartjs-plugin-colorschemes/src/colorschemes/colorschemes.brewer";
export function createChartEstados(totalRecuperados, totalFallecidos, totalCasa, totalHospital, totalHospitalUci) {
  let ctx = document.getElementById("chartEstados");
  let chart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ['Recuperados', 'Fallecidos', 'Casa', 'Hospital', 'Hospital UCI'],
      datasets: [
        {
          data: [totalRecuperados, totalFallecidos, totalCasa, totalHospital, totalHospitalUci],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        ChartDataLabels,
        colorschemes: {
          scheme: Paired12,
        },
      },
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10
        }
      },
      title: {
        display: true,
        text: "Colombia - Estado de atención COVID19",
        fontSize: 15,
        padding: 10,
        fontColor: "white",
      },
      legend: {
        position: 'right',
        fontColor: 'white'
      }
    },
  });
}
