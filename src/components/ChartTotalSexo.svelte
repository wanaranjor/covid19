<script>
  import { createChartTotalSexo } from "../services/charts.js";
  import { onMount } from "svelte";

  export let totalSexo;

  onMount(async () => {
    createChartTotalSexo(totalSexo);
  });
</script>

<div class="bg-gray-900 border border-gray-700 rounded">
  <canvas id="chartTotalSexo" width="800" height="600"></canvas>
</div>