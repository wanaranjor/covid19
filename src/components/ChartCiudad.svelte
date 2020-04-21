<script>
	import { createChartCiudad } from "../services/charts.js";
	import { onMount } from "svelte";

	export let groupCiudad;

	onMount(async () => {
		createChartCiudad(groupCiudad);
	});
</script>

<div class="bg-white border">
	<canvas id="chartCiudad" width="800" height="400"></canvas>
</div>
