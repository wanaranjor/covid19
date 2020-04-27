import Chart from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import 'chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes';
import { Paired12, YlGnBu3 } from "chartjs-plugin-colorschemes/src/colorschemes/colorschemes.brewer";

const scheme = YlGnBu3;

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

export function createChartAtencionSexo(totalAtencionSexo) {
  const atencion = totalAtencionSexo.map(entry => entry.atencion);
  const labels = [...new Set(atencion)];
  const totalF = totalAtencionSexo.filter(entry => entry.sexo === "F");
  const totalM = totalAtencionSexo.filter(entry => entry.sexo === "M");

  let fData = {
    label: 'Femenino',
    data: totalF.map(entry => entry.total),
  };

  let mData = {
    label: 'Masculino',
    data: totalM.map(entry => entry.total)
  };

  let sexoData = {
    labels: labels,
    datasets: [fData, mData]
  };

  let chartOptions = {
    responsive: true,
    plugins: {
      ChartDataLabels,
      colorschemes: {
        scheme: Paired12,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        fontColor: 'white',
        fontSize: 8
      },
    },
    layout: {
      padding: {
        left: 5,
        right: 5,
        top: 10,
        bottom: 10
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontSize: 10,
          fontColor: 'white'
        }
      }],
      xAxes: [{
        ticks: {
          min: 0,
          stepSize: 200,
          beginAtZero: true,
          fontSize: 10,
          fontColor: 'white'
        },
      }]
    },
    legend: {
      position: 'bottom',
      fontColor: 'white'
    },
    title: {
      display: true,
      text: "Estado de atención por sexo COVID19",
      fontSize: 15,
      padding: 10,
      fontColor: "white",
    },
  };

  let ctx = document.getElementById("chartAtencionSexo");
  let chart = new Chart(ctx, {
    type: "bar",
    data: sexoData,
    options: chartOptions
  });
}

export function createChartTotalSexo(totalSexo) {
  let ctx = document.getElementById("chartTotalSexo");
  let chart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: totalSexo.map((entry) => entry.sexo),
      datasets: [
        {
          data: totalSexo.map((entry) => entry.total)
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        ChartDataLabels,
        colorschemes: {
          scheme: scheme,
        }
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
        text: "Colombia - Total por sexos COVID19",
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

export function createChartPaisProcedencia(totalPaisProcedencia) {
  let ctx = document.getElementById("chartPaisProcedencia");
  let chart = new Chart(ctx, {
    type: "horizontalBar",
    data: {
      labels: totalPaisProcedencia.map((entry) => entry.pais),
      datasets: [
        {
          labels: "Ciudades",
          data: totalPaisProcedencia.map((entry) => entry.total),
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
        text: "País procedencia",
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