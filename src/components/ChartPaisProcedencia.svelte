<script>
	import { createChartPaisProcedencia } from "../services/charts.js";
	import { onMount } from "svelte";

	export let totalPaisProcedencia;

	onMount(async () => {
		createChartPaisProcedencia(totalPaisProcedencia);
	});
</script>

<div class="bg-gray-900 border border-gray-700 rounded">
	<canvas id="chartPaisProcedencia" width="800" height="600"></canvas>
</div>
