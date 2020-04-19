<script>
	export let totalConfirmed;
	export let totalRecovered;
	export let totalDeaths;
	export let title;
	export let image;
</script>

<div class="p-2 flex items-center">
	<img src="{image}" alt="flag" />
	<h4 class="text-base font-medium text-gray-900 px-2">
		{title}
	</h4>
</div>
<div class="w-full flex">
	<div class="flex-grow text-gray-800 text-left px-4 py-2">
		<p class="text-sm border-r">Confirmados</p>
		<p class="text-xl font-bold border-r">{totalConfirmed}</p>
	</div>
	<div class="flex-grow text-gray-800 text-left px-4 py-2">
		<p class="text-sm border-r">Recuperados</p>
		<p class="text-xl font-bold border-r">{totalRecovered}</p>
	</div>
	<div class="flex-grow text-gray-800 text-left px-4 py-2">
		<p class="text-sm">Fallecidos</p>
		<p class="text-xl font-bold">{totalDeaths}</p>
	</div>
</div>
