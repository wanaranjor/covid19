import Chart from 'chart.js';
import moment from 'moment';

export function createChart(data, options) {
  let ctx = document.getElementById(options.elementById);
  let chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map(entry => {
        let label = moment(entry.date).format('DD MMM');
        return (label);
      }),
      datasets: [{
        label: options.label,
        data: data.map(entry => entry.confirmed),
        borderColor: options.borderColor
      }
      ]
    },
    options: {
      responsive: true,
      scales: {
        xAxes: [{
          gridLines: {
            drawOnChartArea: false
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: true,
      },
      elements: {
        line: {
          borderWidth: 1,
          fill: false
        }
      }
    }
  })
}