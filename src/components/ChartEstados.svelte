<script>
	import { createChartEstados } from "../services/charts.js";
	import { onMount } from "svelte";

	export let totalRecuperados;
	export let totalFallecidos;
	export let totalCasa;
	export let totalHospital;
	export let totalHospitalUci;

	onMount(async () => {
		createChartEstados(
			totalRecuperados,
			totalFallecidos,
			totalCasa,
			totalHospital,
			totalHospitalUci
		);
	});
</script>

<div class="bg-gray-900 border border-gray-700 rounded">
	<canvas id="chartEstados" width="800" height="600"></canvas>
</div>
