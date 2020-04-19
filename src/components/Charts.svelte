<script>
  import { createChart } from '../services/charts.js';
  import { onMount } from "svelte";

  export let dataConfirmed;
  export let dataRecovered;
  export let dataDeaths;

  onMount(async () => {
    createChart(dataConfirmed, dataRecovered, dataDeaths);
  })
</script>
<div class="bg-white border">
  <canvas id="covidChart" width="800" height="400"></canvas>
</div>
<!-- <canvas id="confirmedchart" width="4" height="1"></canvas>
<canvas id="recoveredchart" width="4" height="1"></canvas>
<canvas id="deathschart" width="4" height="1"></canvas> -->