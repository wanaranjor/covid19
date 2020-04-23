import Chart from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import 'chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes';
import { Paired12 } from "chartjs-plugin-colorschemes/src/colorschemes/colorschemes.brewer";

export function createChart(dataConfirmed, dataRecovered, dataDeaths) {
  let ctx = document.getElementById("covidChart");
  let chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: dataConfirmed.map((entry) =>
        new Intl.DateTimeFormat("es-CO", {
          month: "short",
          day: "numeric",
        }).format(new Date(entry.date))
      ),
      datasets: [
        {
          label: "Confirmados",
          data: dataConfirmed.map((entry) => entry.confirmed),
          borderColor: "orange",
        },
        {
          label: "Recuperados",
          data: dataRecovered.map((entry) => entry.recovered),
          borderColor: "green",
        },
        {
          label: "Fallecidos",
          data: dataDeaths.map((entry) => entry.deaths),
          borderColor: "red",
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        xAxes: [
          {
            gridLines: {
              drawOnChartArea: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              min: 0,
              stepSize: 200,
              beginAtZero: true,
            },
          },
        ],
      },
      title: {
        display: true,
        text: "Coronavirus (COVID-19) Colombia",
        fontSize: 20,
        padding: 15,
        fontColor: "black",
      },
      legend: {
        position: "bottom",
        labels: {
          padding: 20,
          boxWidth: 15,
          fontColor: 'white'
        },
      },
      layout: {
        padding: {
          left: 25,
          right: 25,
        },
      },
      tooltips: {
        titleFontSize: 20,
        xPadding: 10,
        yPadding: 10,
        bodyFontSize: 15,
        bodySpacing: 10,
        mode: "x",
      },
      elements: {
        line: {
          borderWidth: 2,
          fill: false,
        },
        point: {
          radius: 6,
          borderWidth: 2,
          backgroundColor: "white",
          hoverRadius: 8,
          hoverBorderWidth: 4,
        },
      },
    },
  });
}

export function createChartCiudad(groupCiudad) {
  let ctx = document.getElementById("chartCiudad");
  let chart = new Chart(ctx, {
    type: "horizontalBar",
    data: {
      labels: groupCiudad.map((entry) => entry.ciudad),
      datasets: [
        {
          labels: "Ciudades",
          data: groupCiudad.map((entry) => entry.total),
          backgroundColor: Paired12
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            fontColor: 'white'
          }
        }],
        yAxes: [{
          gridLines: {
            color: '#2d3748'
          },
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            fontColor: 'white'
          }
        }]
      },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
          fontColor: 'white'
        },
        colorschemes: {
          scheme: Paired12,
        },
      },
      title: {
        display: true,
        text: "Casos confirmados por cuidades COVID19",
        fontSize: 15,
        padding: 10,
        fontColor: "white",
      },
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10
        },
      },
      tooltips: {
        titleFontSize: 10,
        xPadding: 10,
        yPadding: 10,
        bodyFontSize: 10,
        bodySpacing: 10,
        mode: "y",
      },
      elements: {
        line: {
          borderWidth: 2,
          fill: false,
        },
        point: {
          radius: 6,
          borderWidth: 2,
          backgroundColor: "white",
          hoverRadius: 8,
          hoverBorderWidth: 4,
        },
      },
      legend: {
        display: false
      }
    },
  });
}

export function createChartEstados(totalRecuperados, totalFallecidos, totalCasa, totalHospital, totalHospitalUci) {
  let ctx = document.getElementById("chartEstados");
  let chart = new Chart(ctx, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [totalRecuperados, totalFallecidos, totalCasa, totalHospital, totalHospitalUci],
        },
      ],
      labels: ['Recuperados', 'Fallecidos', 'Casa', 'Hospital', 'Hospital UCI']
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

export function createChartAtencionSexo(totalAtencionSexo) {
  let ctx = document.getElementById("chartAtencionSexo");
  let chart = new Chart(ctx, {
    type: "horizontalBar",
    data: {
      labels: groupCiudad.map((entry) => entry.ciudad),
      datasets: [
        {
          labels: "Ciudades",
          data: groupCiudad.map((entry) => entry.total),
          backgroundColor: Paired12
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            fontColor: 'white'
          }
        }],
        yAxes: [{
          gridLines: {
            color: '#2d3748'
          },
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            fontColor: 'white'
          }
        }]
      },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
          fontColor: 'white'
        },
        colorschemes: {
          scheme: Paired12,
        },
      },
      title: {
        display: true,
        text: "Casos confirmados por cuidades COVID19",
        fontSize: 15,
        padding: 10,
        fontColor: "white",
      },
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10
        },
      },
      tooltips: {
        titleFontSize: 10,
        xPadding: 10,
        yPadding: 10,
        bodyFontSize: 10,
        bodySpacing: 10,
        mode: "y",
      },
      elements: {
        line: {
          borderWidth: 2,
          fill: false,
        },
        point: {
          radius: 6,
          borderWidth: 2,
          backgroundColor: "white",
          hoverRadius: 8,
          hoverBorderWidth: 4,
        },
      },
      legend: {
        display: false
      }
    },
  });
}
