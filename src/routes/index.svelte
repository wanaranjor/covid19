<script context="module">
  import { getGlobal, getLocal, getGroupByCity, countCasos } from "../services/services.js";
  export async function preload() {
    const countLocal = await countCasos();
    const global = await getGlobal();
    const local = await getLocal();
    const groupCiudad = await getGroupByCity();

    const options = {
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      hour12: true,
      timeZone: 'America/Bogota'
    };
    const dateInfo = new Intl.DateTimeFormat('es-CO', options).format(new Date(global.data.Date))
    return { countLocal, global, local, groupCiudad, dateInfo };
  }
</script>

<script>
  import Charts from '../components/Charts.svelte';
  import ChartCiudad from '../components/ChartCiudad.svelte';
  import DataLocal from "../components/DataLocal.svelte";
  import DataGlobal from "../components/DataGlobal.svelte";

  export let countLocal;
  export let global;
  export let local;
  export let dateInfo;
  export let groupCiudad;

  const optionsLocal = {
    title: "Colombia",
    image: "flag.png",
  }

  const optionsGlobal = {
    title: "Global",
    image: "globe.svg",
  }

  // const optionsConfirmedChart = {
  // 	elementById: "confirmedchart",
  // 	label: "Confirmados",
  // 	borderColor: "yellow"
  // }

  // const optionsRecoveredChart = {
  // 	elementById: "recoveredchart",
  // 	label: "Recuperados",
  // 	borderColor: "green"
  // }

  // const optionsDeathsChart = {
  // 	elementById: "deathschart",
  // 	label: "Fallecidos",
  // 	borderColor: "red"
  // }

</script>

<svelte:head>
  <title>Inicio</title>
</svelte:head>

<div class="bg-black-alt px-3 py-1">
  <div class="bg-gray-900 border border-gray-800 rounded shadow p-2 my-3 text-white">
    <div class="flex justify-between border-b border-gray-700 p-3">
      <h3 class="text-lg leading-6 font-bold">
        Resumen Casos Coronavirus (COVID-19) - Hora Actualización {dateInfo}
      </h3>
      <p class="text-gray-500">Fuente de información: <a href="https://covid19api.com/"
          target="_blank">COVID19API</a></p>
    </div>
    <div class="flex">
      <DataLocal {countLocal} totalConfirmed={local.confirmed} totalRecovered={local.recovered} totalDeaths={local.deaths}
        title={optionsLocal.title} image={optionsLocal.image} />
      <DataGlobal totalConfirmed={global.confirmed} totalRecovered={global.recovered} totalDeaths={global.deaths}
        title={optionsGlobal.title} image={optionsGlobal.image} />
    </div>
  </div>

  <Charts dataConfirmed={local.dataConfirmed} dataRecovered={local.dataRecovered} dataDeaths={local.dataDeaths} />
  <!-- <Charts data={local.dataConfirmed} options={optionsConfirmedChart} />
  <Charts data={local.dataRecovered} options={optionsRecoveredChart} />
  <Charts data={local.dataDeaths} options={optionsDeathsChart} /> -->
  <div class="grid grid-cols-2 grid-flow-col gap-4 my-3">
    <ChartCiudad {groupCiudad}/>
  </div>
</div>