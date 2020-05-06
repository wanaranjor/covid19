<script>
  import { createChartCountry } from "../services/charts.js";
  import { onMount } from "svelte";

  export let dataCountry;

  onMount(async () => {
    let dataDate = [];
    let dataConfirmed = [];
    let dataRecovered = [];
    let dataDeaths = [];
    dataCountry.map((entry) => {
      dataDate.push(entry.Date);
      dataConfirmed.push(entry.Confirmed);
      dataRecovered.push(entry.Recovered);
      dataDeaths.push(entry.Deaths);
    });
    console.log(dataDate, dataConfirmed, dataRecovered, dataDeaths);
    // let dataRecovered = dataCountry.filter((entry) => entry.Recovered);
    // let dataDeaths = dataCountry.filter((entry) => entry.Deaths);
    // console.log(dataConfirmed, dataRecovered, dataDeaths);
    createChartCountry(dataDate, dataConfirmed, dataRecovered, dataDeaths);
  });
</script>
<div class="bg-gray-900 border border-gray-700 rounded mb-3">
  <canvas id="covidChart" width="800" height="400"></canvas>
</div>
