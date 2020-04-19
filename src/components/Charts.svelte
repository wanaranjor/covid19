<script>
  import { createChart } from '../services/charts.js';
  import { onMount } from "svelte";

  export let data;
  export let options;

  onMount(async () => {
    console.log(data);
    createChart(data, options);
  })
</script>

<canvas id="confirmedchart" width="4" height="1"></canvas>
<canvas id="recoveredchart" width="4" height="1"></canvas>
<canvas id="deathschart" width="4" height="1"></canvas>