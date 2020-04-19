<script context="module">
	import { getGlobal, getLocal } from "../services/services.js";
	export async function preload() {
		const global = await getGlobal();
		const local = await getLocal();
		console.log(local)
		return { global, local };
	}
</script>

<script>
	import { onMount } from 'svelte';
	import Charts from '../components/Charts.svelte';
	import Data from "../components/Data.svelte";

	export let global;
	export let local;

	const optionsLocal = {
		title: "Colombia",
		image: "flag.png",
	}

	const optionsGlobal = {
		title: "Global",
		image: "globe.png",
	}

	const optionsConfirmedChart = {
		elementById: "confirmedchart",
		label: "Confirmados",
		borderColor: "yellow"
	}

	const optionsRecoveredChart = {
		elementById: "recoveredchart",
		label: "Recuperados",
		borderColor: "green"
	}

	const optionsDeathsChart = {
		elementById: "deathschart",
		label: "Fallecidos",
		borderColor: "red"
	}

</script>

<svelte:head>
	<title>Inicio</title>
</svelte:head>

<div class="p-3">
	<div class="border my-3">
		<div class="border-b p-3">
			<h3 class="text-lg leading-6 font-bold text-gray-900">
				Resumen Casos COVID-19
			</h3>
		</div>
		<Data totalConfirmed={local.confirmed} totalRecovered={local.recovered} totalDeaths={local.deaths}
			title={optionsLocal.title} image={optionsLocal.image} />

		<Data totalConfirmed={global.confirmed} totalRecovered={global.recovered} totalDeaths={global.deaths}
			title={optionsGlobal.title} image={optionsGlobal.image} />
	</div>

	<Charts data={local.dataConfirmed} options={optionsConfirmedChart} />
	<Charts data={local.dataRecovered} options={optionsRecoveredChart} />
	<Charts data={local.dataDeaths} options={optionsDeathsChart} />

</div>