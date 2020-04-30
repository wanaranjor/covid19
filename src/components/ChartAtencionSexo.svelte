<script>
  import { createChartAtencionSexo } from "../services/charts.js";
  import { onMount } from "svelte";

  export let totalAtencionSexo;

  onMount(async () => {
    createChartAtencionSexo(totalAtencionSexo);
  });
</script>

<div class="bg-gray-900 border border-gray-700 rounded mb-3">
  <canvas id="chartAtencionSexo" width="800" height="400"></canvas>
</div>
