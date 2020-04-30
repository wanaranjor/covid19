<script context="module">
  import { getGlobal, totalEstado, countCasos, getData, getLastRow, getRangeAge } from "../services/services.js";
  export async function preload() {

   
    const totalConfirmados = await countCasos();

    const totalRecuperados = await totalEstado('RECUPERADO');
    const totalFallecidos = await totalEstado('FALLECIDO');
    const totalCasa = await totalEstado('CASA');
    const totalHospital = await totalEstado('HOSPITAL');
    const totalHospitalUci = await totalEstado('HOSPITAL UCI');

    const totalAtencionSexo = await getData('totalAtencionSexo');
    const totalPaisProcedencia = await getData('totalPaisProcedencia');
    const totalSexo = await getData('totalSexo');
    const groupCiudad = await getData('groupByCity');

    //  let totalRangoCasa =  await getRangeAge('CASA');
    //  let totalRangoRecuperado =  await getRangeAge('RECUPERADO');
    //  let totalRangoFallecido =  await getRangeAge('FALLECIDO');
    //  let totalRangoHospital =  await getRangeAge('HOSPITAL');
    // let totalRangoUci = await getRangeAge('HOSPITAL UCI');

    
    // totalRangoEdad10.push(await getRangeAge('RECUPERADO',0, 10));
    // totalRangoEdad10.push(await getRangeAge('FALLECIDO',0, 10));
    // totalRangoEdad10.push(await getRangeAge('HOSPITAL',0, 10));
    // totalRangoEdad10.push(await getRangeAge('HOSPITAL UCI', 0, 10));

    // const totalRangoEdad20 = await getRangeAge('',11, 20);
    // const totalRangoEdad30 = await getRangeAge('',21, 30);
    // const totalRangoEdad40 = await getRangeAge('',31, 40);
    // const totalRangoEdad50 = await getRangeAge('',41, 50);
    // const totalRangoEdad60 = await getRangeAge('',51, 60);
    // const totalRangoEdad70 = await getRangeAge('',61, 70);
    // const totalRangoEdad80 = await getRangeAge('',71, 80);
    // const totalRangoEdad90 = await getRangeAge('',81, 90);
    // const totalRangoEdad100 = await getRangeAge('',91, 150);

    // const totalRangoEdad = [totalRangoEdad10, totalRangoEdad20, totalRangoEdad30, totalRangoEdad40, totalRangoEdad50, totalRangoEdad60, totalRangoEdad70, totalRangoEdad80, totalRangoEdad90, totalRangoEdad100];

    const global = await getGlobal();
    const lastRowData = await getLastRow(totalConfirmados);

    const options = {
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      hour12: true,
      timeZone: 'America/Bogota'
    };
    const datelastRowData = new Date(lastRowData[0].fecha_reporte_web)
    const dateInfo = new Intl.DateTimeFormat('es-CO', options).format(new Date(datelastRowData));

    return { totalConfirmados, totalRecuperados, totalFallecidos, totalCasa, totalHospital, totalHospitalUci, totalAtencionSexo, totalPaisProcedencia, totalSexo, groupCiudad, dateInfo };
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
  // import ChartRangoEdad from '../components/ChartRangoEdad.svelte';

  export let totalConfirmados;
  export let totalRecuperados;
  export let totalFallecidos;
  export let totalCasa;
  export let totalHospital;
  export let totalHospitalUci;
  export let totalAtencionSexo;
  export let totalSexo;
  export let totalPaisProcedencia;
  export let groupCiudad;

  // export let totalRangoCasa;
  // export let totalRangoRecuperado;
  // export let totalRangoFallecido;
  // export let totalRangoHospital;
  // export let totalRangoUci;
  
  export let dateInfo;

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
  <div class=" bg-gray-900 border border-gray-800 rounded shadow p-2 my-3 text-white">
    <div class="flex justify-between border-b border-gray-700 p-3">
      <h3 class="text-lg leading-6 font-bold">
        Resumen Casos Coronavirus (COVID-19)
      </h3>
    </div>
    <div class="flex">
      <DataLocal {totalConfirmados} {totalRecuperados} {totalFallecidos} {totalCasa} {totalHospital} {totalHospitalUci}
        {dateInfo} title={optionsLocal.title} image={optionsLocal.image} />

      <!-- <DataGlobal totalConfirmed={global.confirmed} totalRecovered={global.recovered} totalDeaths={global.deaths}
        title={optionsGlobal.title} image={optionsGlobal.image} /> -->
    </div>
  </div>
  <div class="grid grid-rows-1 grid-cols-2 grid-flow-row gap-3 my-3">
    <ChartCiudad {groupCiudad} />
    <ChartAtencionSexo {totalAtencionSexo} />
  </div>
  <div class="grid grid-rows-1 grid-cols-3 grid-flow-row gap-3 my-3">
    <ChartEstados {totalRecuperados} {totalFallecidos} {totalCasa} {totalHospital} {totalHospitalUci} />
    <ChartTotalSexo {totalSexo} />
    <ChartPaisProcedencia {totalPaisProcedencia} />
    <!-- <ChartRangoEdad {totalRangoCasa} {totalRangoRecuperado} {totalRangoFallecido} {totalRangoHospital} {totalRangoUci}/> -->
  </div>
</div>