<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<div class="h-screen w-screen">
  <div class="container mx-auto h-full flex justify-center items-center">
    <div class="flex flex-col text-3xl text-center text-gray-700 font-semibold items-center">
      <p class="py-3">Algo anda mal...</p>
      <img class="fill-current w-1/2 py-3" src="404.svg" alt="404" />
      <p class="py-3">{status} {error.message}</p>
    </div>
  </div>
</div>
