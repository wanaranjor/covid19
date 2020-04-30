<script>
  export let dateInfo;
  export let totalConfirmados;
  export let totalRecuperados;
  export let totalFallecidos;
  export let totalCasa;
  export let totalHospital;
  export let totalHospitalUci;

  export let title;
  export let image;
</script>

<div class="w-full sm:w-2/3 pt-1">
  <div class="p-2 flex flex-col sm:flex-row justify-between items-start sm:items-center">
    <div class="flex">
      <img src="{image}" alt="image" />
      <h4 class="text-base font-bold px-2">
        {title}
      </h4>
    </div>
    <p class="text-sm sm:text-base md:text-lg text-gray-500">
      Fecha Actualización {dateInfo}
    </p>
    <p class="text-sm sm:text-base md:text-lg text-gray-500">
      Fuente de información:
      <a class="font-semibold hover:text-white" href="https://www.ins.gov.co/Noticias/Paginas/Coronavirus.aspx" target="_blank">INS Colombia</a>
    </p>
  </div>

  <div class="flex flex-col md:flex-row">
    <div class="flex-grow text-left px-4 py-2 text-center sm:border-r border-gray-700">
      <p class="text-sm font-bold text-yellow-400">
        Confirmados
      </p>
      <p class="text-3xl font-bold tracking-wide text-yellow-400">
        {totalConfirmados}
      </p>
    </div>
    <div class="flex-grow text-left px-4 py-2 text-center sm:border-r border-gray-700">
      <p class="text-sm font-bold text-green-400">
        Recuperados
      </p>
      <p class="text-2xl font-bold tracking-wide text-green-400">
        {totalRecuperados}
      </p>
    </div>
    <div class="flex-grow text-left px-4 py-2 text-center sm:border-r border-gray-700">
      <p class="text-sm font-bold text-red-400">
        Fallecidos
      </p>
      <p class="text-2xl font-bold tracking-wide text-red-400">
        {totalFallecidos}
      </p>
    </div>
    <div class="flex-grow text-left px-4 py-2 text-center sm:border-r border-gray-700">
      <p class="text-sm font-bold">Atención en casa</p>
      <p class="text-2xl font-bold tracking-wide">
        {totalCasa}
      </p>
    </div>
    <div class="flex-grow text-left px-4 py-2 text-center sm:border-r border-gray-700">
      <p class="text-sm font-bold">Hospital</p>
      <p class="text-2xl font-bold tracking-wide">
        {totalHospital}
      </p>
    </div>
    <div class="flex-grow text-left px-4 py-2 text-center sm:border-r border-gray-700">
      <p class="text-sm font-bold">Hospital UCI</p>
      <p class="text-2xl font-bold tracking-wide">
        {totalHospitalUci}
      </p>
    </div>
  </div>
</div>
