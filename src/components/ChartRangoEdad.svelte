<script>
  import { createChartRangoEdad } from "../services/charts.js";
  import { onMount } from "svelte";

  export let totalRangoCasa;
  export let totalRangoRecuperado;
  export let totalRangoFallecido;
  export let totalRangoHospital;
  export let totalRangoUci;

  onMount(async () => {
    createChartRangoEdad(totalRangoCasa, totalRangoRecuperado, totalRangoFallecido, totalRangoHospital, totalRangoUci);
  });
</script>

<div class="bg-gray-900 border border-gray-700 rounded">
  <canvas id="chartRangoEdad" width="800" height="400"></canvas>
</div>
