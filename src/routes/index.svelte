<script context="module">
  import { getGlobal, getCountry, totalEstado, countCasos, getData, getLastRow, getRangeAge } from "../services/services.js";
  export async function preload() {
    // const totalConfirmados = await countCasos();
    // const totalRecuperados = await totalEstado('RECUPERADO');
    // const totalFallecidos = await totalEstado('FALLECIDO');
    // const totalCasa = await totalEstado('CASA');
    // const totalHospital = await totalEstado('HOSPITAL');
    // const totalHospitalUci = await totalEstado('HOSPITAL UCI');
    // const totalAtencionSexo = await getData('totalAtencionSexo');
    // const totalPaisProcedencia = await getData('totalPaisProcedencia');
    // const totalSexo = await getData('totalSexo');
    // const groupCiudad = await getData('groupByCity');
    // const lastRowData = await getLastRow(totalConfirmados);
    const global = await getGlobal();
    const dataCountry =  await getCountry('colombia')
    
    const options = {
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      hour12: true,
      timeZone: 'America/Bogota'
    };
    // const datelastRowData = new Date(lastRowData[0].fecha_reporte_web)
    // const dateInfo = new Intl.DateTimeFormat('es-CO', options).format(new Date(datelastRowData));
    // return { totalConfirmados, totalRecuperados, totalFallecidos, totalCasa, totalHospital, totalHospitalUci, totalAtencionSexo, totalPaisProcedencia, totalSexo, groupCiudad, dateInfo };
    return { global, dataCountry };
  }
</script>

<script>
  import Charts from '../components/Charts.svelte';
  import ChartCiudad from '../components/ChartCiudad.svelte';
  import ChartEstados from '../components/ChartEstados.svelte';
  import ChartAtencionSexo from '../components/ChartAtencionSexo.svelte';
  import ChartTotalSexo from '../components/ChartTotalSexo.svelte';
  import DataLocal from "../components/DataLocal.svelte";
  import DataGlobal from "../components/DataGlobal.svelte";
  import ChartPaisProcedencia from '../components/ChartPaisProcedencia.svelte';

  // export let totalConfirmados;
  // export let totalRecuperados;
  // export let totalFallecidos;
  // export let totalCasa;
  // export let totalHospital;
  // export let totalHospitalUci;
  // export let totalAtencionSexo;
  // export let totalSexo;
  // export let totalPaisProcedencia;
  // export let groupCiudad;
  // export let dateInfo;
  export let global;
  export let dataCountry;

  const optionsLocal = {
    title: "Colombia",
    image: "flag.png",
  }

  const optionsGlobal = {
    title: "Global",
    image: "globe.svg",
  }
</script>

<svelte:head>
  <title>Inicio</title>
</svelte:head>

<div class="bg-black-alt px-3 py-1">
  <div class="bg-gray-900 border border-gray-700 rounded shadow p-2 my-3 text-white">
    <div class="flex justify-between border-b border-gray-700 p-3">
      <h3 class="text-base md:text-lg leading-6 font-bold">
        Resumen Casos Coronavirus (COVID-19)
      </h3>
    </div>
    <div class="flex flex-col sm:flex-row">
      <!-- <DataLocal {totalConfirmados} {totalRecuperados} {totalFallecidos} {totalCasa} {totalHospital} {totalHospitalUci}
        {dateInfo} title={optionsLocal.title} image={optionsLocal.image} /> -->

      <DataGlobal totalConfirmed={global.confirmed} totalRecovered={global.recovered} totalDeaths={global.deaths}
        title={optionsGlobal.title} image={optionsGlobal.image} />
    </div>
  </div>
  <div class="flex flex-col md:grid md:grid-rows-1 md:grid-cols-1 md:grid-flow-row md:gap-3">
    <Charts {dataCountry} />
  </div>
  <!-- <div class="flex flex-col md:grid md:grid-rows-1 md:grid-cols-2 md:grid-flow-row md:gap-3">
    <ChartCiudad {groupCiudad} />
    <ChartAtencionSexo {totalAtencionSexo} />
  </div>
  <div class="flexmd:grid md:grid-rows-1 md:grid-cols-3 md:grid-flow-row md:gap-3">
    <ChartEstados {totalRecuperados} {totalFallecidos} {totalCasa} {totalHospital} {totalHospitalUci} />
    <ChartTotalSexo {totalSexo} />
    <ChartPaisProcedencia {totalPaisProcedencia} />
  </div> -->
</div>