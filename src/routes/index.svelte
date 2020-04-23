<script context="module">
  import { getGlobal, totalEstado, getDataEstado, getLocal, getGroupByCity, countCasos, getTotalAtencionSexo } from "../services/services.js";
  export async function preload() {
    const totalConfirmados = await countCasos();
    const totalRecuperados = await totalEstado('Recuperado');
    const totalFallecidos = await totalEstado('Fallecido');
    const totalCasa = await totalEstado('Casa');
    const totalHospital = await totalEstado('Hospital');
    const totalHospitalUci = await totalEstado('Hospital UCI');
    const totalAtencionSexo = await getTotalAtencionSexo();

    const dataConfirmados = await getDataEstado()

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
    return { totalConfirmados, totalRecuperados, totalFallecidos, totalCasa, totalHospital, totalHospitalUci, groupCiudad, totalAtencionSexo, dateInfo };
  }
</script>

<script>
  import Charts from '../components/Charts.svelte';
  import ChartCiudad from '../components/ChartCiudad.svelte';
  import ChartEstados from '../components/ChartEstados.svelte';
  import ChartAtencionSexo from '../components/ChartAtencionSexo.svelte';
  import DataLocal from "../components/DataLocal.svelte";
  import DataGlobal from "../components/DataGlobal.svelte";

  export let totalConfirmados;
  export let totalRecuperados;
  export let totalFallecidos;
  export let totalCasa;
  export let totalHospital;
  export let totalHospitalUci;
  export let totalAtencionSexo;

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
      <p class="text-gray-500">Fuente de información: <a href="https://covid19api.com/" target="_blank">COVID19API</a>
      </p>
    </div>
    <div class="flex">
      <DataLocal {totalConfirmados} {totalRecuperados} {totalFallecidos} {totalCasa} {totalHospital} {totalHospitalUci}
        title={optionsLocal.title} image={optionsLocal.image} />

      <!-- <DataGlobal totalConfirmed={global.confirmed} totalRecovered={global.recovered} totalDeaths={global.deaths}
        title={optionsGlobal.title} image={optionsGlobal.image} /> -->
    </div>
  </div>

  <!-- <Charts dataConfirmed={local.dataConfirmed} dataRecovered={local.dataRecovered} dataDeaths={local.dataDeaths} /> -->

  <!-- <Charts data={local.dataConfirmed} options={optionsConfirmedChart} />
  <Charts data={local.dataRecovered} options={optionsRecoveredChart} />
  <Charts data={local.dataDeaths} options={optionsDeathsChart} /> -->
  <div class="grid grid-cols-3 grid-flow-col gap-3 my-3">
    <ChartCiudad {groupCiudad} />
    <ChartEstados {totalRecuperados} {totalFallecidos} {totalCasa} {totalHospital} {totalHospitalUci} />
    <ChartAtencionSexo {totalAtencionSexo} />
  </div>
</div>