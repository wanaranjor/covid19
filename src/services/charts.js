import Chart from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Aspect6 } from "chartjs-plugin-colorschemes/src/colorschemes/colorschemes.office";

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
		type: "bar",
		data: {
			labels: groupCiudad.map((entry) => entry.ciudad_de_ubicaci_n),
			datasets: [
				{
					labels: "Ciudades",
					data: groupCiudad.map((entry) => entry.total),
					borderColor: "orange",
				},
			],
		},
		options: {
			responsive: true,
			plugins: {
				ChartDataLabels,
				colorschemes: {
					scheme: Aspect6,
				},
			},
			scales: {
				xAxes: [
					{
						gridLines: {
							drawOnChartArea: false,
						},
					},
				],
			},
			title: {
				display: true,
				text: "Coronavirus (COVID-19) Colombia - Cuidades",
				fontSize: 20,
				padding: 15,
				fontColor: "black",
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
