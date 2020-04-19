<script context="module">
	import { getGlobal, getLocal } from "../services/services.js";
	export async function preload() {
		const global = await getGlobal();
		const local = await getLocal();
		const options = {
			year: 'numeric', month: 'numeric', day: 'numeric',
			hour: 'numeric', minute: 'numeric', second: 'numeric',
			hour12: false,
			timeZone: 'America/Bogota'
		};
		const dateInfo = new Intl.DateTimeFormat('es-CO', options).format(new Date(global.data.Date))
		return { global, local, dateInfo };
	}
</script>

<script>
	import Charts from '../components/Charts.svelte';
	import Data from "../components/Data.svelte";

	export let global;
	export let local;
	export let dateInfo;

	const optionsLocal = {
		title: "Colombia",
		image: "flag.png",
	}

	const optionsGlobal = {
		title: "Global",
		image: "globe.png",
	}

	// const optionsConfirmedChart = {
	// 	elementById: "confirmedchart",
	// 	label: "Confirmados",
	// 	borderColor: "yellow"
	// }

	// const optionsRecoveredChart = {
	// 	elementById: "recoveredchart",
	// 	label: "Recuperados",
	// 	borderColor: "green"
	// }

	// const optionsDeathsChart = {
	// 	elementById: "deathschart",
	// 	label: "Fallecidos",
	// 	borderColor: "red"
	// }

</script>

<svelte:head>
	<title>Inicio</title>
</svelte:head>

<div class="bg-gray-200 px-3 py-1">
	<div class="bg-white border my-3">
		<div class="flex justify-between border-b p-3">
			<h3 class="text-lg leading-6 font-bold text-gray-900">
				Resumen Casos Coronavirus (COVID-19) - Hora Actualización {dateInfo}
			</h3>
			<p class="text-gray-500">Fuente de información: <a class="text-gray-800" href="https://covid19api.com/"
					target="_blank">COVID19API</a></p>
		</div>
		<Data totalConfirmed={local.confirmed} totalRecovered={local.recovered} totalDeaths={local.deaths}
			title={optionsLocal.title} image={optionsLocal.image} />

		<Data totalConfirmed={global.confirmed} totalRecovered={global.recovered} totalDeaths={global.deaths}
			title={optionsGlobal.title} image={optionsGlobal.image} />
	</div>

	<Charts dataConfirmed={local.dataConfirmed} dataRecovered={local.dataRecovered} dataDeaths={local.dataDeaths} />
	<!-- <Charts data={local.dataConfirmed} options={optionsConfirmedChart} />
	<Charts data={local.dataRecovered} options={optionsRecoveredChart} />
	<Charts data={local.dataDeaths} options={optionsDeathsChart} /> -->

</div>