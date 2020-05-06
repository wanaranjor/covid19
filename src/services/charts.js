import Chart from "chart.js";
// import ChartDataLabels from "chartjs-plugin-datalabels";
import "chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes";
import { Paired12, YlGnBu3 } from "chartjs-plugin-colorschemes/src/colorschemes/colorschemes.brewer";

const scheme = YlGnBu3;

export function createChartCountry(dataDate, dataConfirmed, dataRecovered, dataDeaths) {
  let ctx = document.getElementById("covidChart");
  const chartOptions = {
    responsive: true,
    plugins: {
      colorschemes: {
        scheme: Paired12,
      },
      datalabels: {
        anchor: "end",
        align: "end",
        fontColor: "white",
        fontSize: 8,
      },
    },
    layout: {
      padding: {
        left: 5,
        right: 5,
        top: 10,
        bottom: 10,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            fontColor: "white",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
          },
          ticks: {
            min: 0,
            stepSize: 200,
            beginAtZero: true,
            fontSize: 10,
            fontColor: "white",
          },
        },
      ],
    },
    legend: {
      position: "bottom",
      fontColor: "white",
      labels: {
        padding: 20,
        boxWidth: 15,
        fontColor: "white",
      },
    },
    title: {
      display: true,
      text: "Coronavirus COVID19 - Colombia",
      fontSize: 15,
      padding: 10,
      fontColor: "white",
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
  };
  let chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: dataDate.map((entry) => new Intl.DateTimeFormat("es-CO").format(new Date(entry))),
      datasets: [
        {
          label: "Confirmados",
          data: dataConfirmed,
          borderColor: "orange",
        },
        {
          label: "Recuperados",
          data: dataRecovered,
          borderColor: "green",
        },
        {
          label: "Fallecidos",
          data: dataDeaths,
          borderColor: "red",
        },
      ],
    },
    options: chartOptions,
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
          backgroundColor: Paired12,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontSize: 10,
              fontColor: "white",
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              color: "#2d3748",
            },
            ticks: {
              beginAtZero: true,
              fontSize: 10,
              fontColor: "white",
            },
          },
        ],
      },
      plugins: {
        datalabels: {
          anchor: "end",
          align: "end",
          fontColor: "white",
        },
        colorschemes: {
          scheme: Paired12,
        },
      },
      title: {
        display: true,
        text: "Casos confirmados por cuidades Top 10",
        fontSize: 15,
        padding: 10,
        fontColor: "white",
      },
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10,
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
        display: false,
      },
    },
  });
}

export function createChartEstados(totalRecuperados, totalFallecidos, totalCasa, totalHospital, totalHospitalUci) {
  let ctx = document.getElementById("chartEstados");
  let chart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Recuperados", "Fallecidos", "Casa", "Hospital", "Hospital UCI"],
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
          bottom: 10,
        },
      },
      title: {
        display: true,
        text: "Estado de atención",
        fontSize: 15,
        padding: 10,
        fontColor: "white",
      },
      legend: {
        position: "right",
        fontColor: "white",
      },
    },
  });
}

export function createChartAtencionSexo(totalAtencionSexo) {
  const atencion = totalAtencionSexo.map((entry) => entry.atencion);
  const labels = [...new Set(atencion)];
  const totalF = totalAtencionSexo.filter((entry) => entry.sexo === "F");
  const totalM = totalAtencionSexo.filter((entry) => entry.sexo === "M");

  let fData = {
    label: "Femenino",
    data: totalF.map((entry) => entry.total),
  };

  let mData = {
    label: "Masculino",
    data: totalM.map((entry) => entry.total),
  };

  let sexoData = {
    labels: labels,
    datasets: [fData, mData],
  };

  let chartOptions = {
    responsive: true,
    plugins: {
      ChartDataLabels,
      colorschemes: {
        scheme: Paired12,
      },
      datalabels: {
        anchor: "end",
        align: "end",
        fontColor: "white",
        fontSize: 8,
      },
    },
    layout: {
      padding: {
        left: 5,
        right: 5,
        top: 10,
        bottom: 10,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            fontColor: "white",
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            min: 0,
            stepSize: 200,
            beginAtZero: true,
            fontSize: 10,
            fontColor: "white",
          },
        },
      ],
    },
    legend: {
      position: "bottom",
      fontColor: "white",
    },
    title: {
      display: true,
      text: "Estado de atención por sexo",
      fontSize: 15,
      padding: 10,
      fontColor: "white",
    },
  };

  let ctx = document.getElementById("chartAtencionSexo");
  let chart = new Chart(ctx, {
    type: "bar",
    data: sexoData,
    options: chartOptions,
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
          data: totalSexo.map((entry) => entry.total),
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        ChartDataLabels,
        colorschemes: {
          scheme: scheme,
        },
      },
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10,
        },
      },
      title: {
        display: true,
        text: "Casos confirmados por sexos",
        fontSize: 15,
        padding: 10,
        fontColor: "white",
      },
      legend: {
        position: "right",
        fontColor: "white",
      },
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
          backgroundColor: Paired12,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontSize: 10,
              fontColor: "white",
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              color: "#2d3748",
            },
            ticks: {
              beginAtZero: true,
              fontSize: 10,
              fontColor: "white",
            },
          },
        ],
      },
      plugins: {
        datalabels: {
          anchor: "end",
          align: "end",
          fontColor: "white",
        },
        colorschemes: {
          scheme: Paired12,
        },
      },
      title: {
        display: true,
        text: "País procedencia Top 10",
        fontSize: 15,
        padding: 10,
        fontColor: "white",
      },
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10,
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
        display: false,
      },
    },
  });
}

export function createChartRangoEdad(totalRangoCasa, totalRangoRecuperado, totalRangoFallecido, totalRangoHospital, totalRangoUci) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const dataCasa10 = totalRangoCasa.filter((entry) => entry.edad >= 0 && entry.edad <= 10);

  const dataRecuperado10 = totalRangoRecuperado.filter((entry) => entry.edad >= 0 && entry.edad <= 10);

  const dataFallecido10 = totalRangoFallecido.filter((entry) => entry.edad >= 0 && entry.edad <= 10);

  const dataHospital10 = totalRangoHospital.filter((entry) => entry.edad >= 0 && entry.edad <= 10);

  const dataUci10 = totalRangoUci.filter((entry) => entry.edad >= 0 && entry.edad <= 10);

  const sumTotal = (data) => {
    const totalItem = data.map((entry) => entry.total);
    const sumTotalItem = totalItem.reduce(reducer);
    return sumTotalItem;
  };

  const sumTotalCasa10 = dataCasa10.length > 0 ? sumTotal(dataCasa10) : 0;
  const sumTotalRecuperado10 = dataRecuperado10.length > 0 ? sumTotal(dataRecuperado10) : 0;
  const sumTotalFallecido10 = dataFallecido10.length > 0 ? sumTotal(dataFallecido10) : 0;
  const sumTotalHospital10 = dataHospital10.length > 0 ? sumTotal(dataHospital10) : 0;
  const sumTotalUci10 = dataUci10.length > 0 ? sumTotal(dataUci10) : 0;

  console.log(sumTotalCasa10, sumTotalRecuperado10, sumTotalFallecido10, sumTotalHospital10, sumTotalUci10);

  // const totalCasa10 = dataCasa10.map((entry) => entry.total);
  // console.log(totalCasa10);

  // const sumTotalCasa10 = totalCasa10.reduce(reducer);
  // console.log(sumTotalCasa10);

  // const totalRecuperado10 = dataRecuperado10.map((entry) => entry.total);
  // console.log(totalRecuperado10);

  // const sumTotalRecuperado10 = totalRecuperado10.reduce(reducer);
  // console.log(sumTotalRecuperado10);

  const data1 = {
    label: "Casa",
    data: [sumTotalCasa1],
  };

  console.log(data1);

  const data2 = {
    label: "Recuperado",
    data: [sumTotalRecuperado10],
  };

  const data3 = {
    label: "Fallecido",
    data: [sumTotalFallecido10],
  };

  const data4 = {
    label: "Hospital",
    data: sumTotalHospital10,
  };

  const data5 = {
    label: "Uci",
    data: [sumTotalUci10],
  };

  let chartOptions = {
    responsive: true,
    plugins: {
      ChartDataLabels,
      colorschemes: {
        scheme: Paired12,
      },
      datalabels: {
        anchor: "end",
        align: "end",
        fontColor: "white",
        fontSize: 8,
      },
    },
    layout: {
      padding: {
        left: 5,
        right: 5,
        top: 10,
        bottom: 10,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            fontColor: "white",
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            min: 0,
            stepSize: 200,
            beginAtZero: true,
            fontSize: 10,
            fontColor: "white",
          },
        },
      ],
    },
    legend: {
      position: "bottom",
      fontColor: "white",
    },
    title: {
      display: true,
      text: "Estado de atención por sexo COVID19",
      fontSize: 15,
      padding: 10,
      fontColor: "white",
    },
  };

  const labels = ["0-10", "11-20"];

  const dataFinal = {
    labels: labels,
    datasets: [data1, data2],
  };

  let ctx = document.getElementById("chartRangoEdad");
  let chart = new Chart(ctx, {
    type: "bar",
    data: dataFinal,
    options: chartOptions,
  });
}
