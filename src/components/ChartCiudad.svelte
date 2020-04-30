<script>
	import { createChartCiudad } from "../services/charts.js";
	import { onMount } from "svelte";

	export let groupCiudad;

	onMount(async () => {
		createChartCiudad(groupCiudad);
	});
</script>

<div class="bg-gray-900 border border-gray-700 rounded">
	<canvas id="chartCiudad" width="800" height="400"></canvas>
</div>
