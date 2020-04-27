<script>
	export let totalConfirmed;
	export let totalRecovered;
	export let totalDeaths;
	export let title;
	export let image;
</script>

<div class="w-1/3 pt-1">
	<div class="p-2 flex items-center">
		<div class="flex">
			<img src="{image}" alt="image" />
			<h4 class="text-base font-bold px-2">
				{title}
			</h4>
		</div>
		<p class="text-gray-500">Fuente de información: <a class="font-semibold hover:text-white"
				href="https://covid19api.com/" target="_blank">COVID19API</a>
		</p>
	</div>
	<div class="flex">
		<div class="flex-grow text-left px-4 py-2 text-center border-r border-gray-700">
			<p class="text-sm font-bold text-yellow-400">
				Confirmados
			</p>
			<p class="text-2xl font-bold tracking-wide text-yellow-400">
				{totalConfirmed}
			</p>
		</div>
		<div class="flex-grow text-left px-4 py-2 text-center border-r border-gray-700">
			<p class="text-sm font-bold text-green-400">
				Recuperados
			</p>
			<p class="text-2xl font-bold tracking-wide text-green-400">
				{totalRecovered}
			</p>
		</div>
		<div class="flex-grow text-left px-4 py-2 text-center">
			<p class="text-sm font-bold text-red-400">
				Fallecidos
			</p>
			<p class="text-2xl font-bold tracking-wide text-red-400">
				{totalDeaths}
			</p>
		</div>
	</div>
</div>