import axios from 'axios';

export async function getGlobal() {
	try {
		const URL_API_GLOBAL = "http://127.0.0.1:3000/api/Covid19s/summaryglobal";
		const response = await axios(URL_API_GLOBAL);
		const data = response.data;
		const global = data.Global;
		// TODO: cambiar coma por punto en separador de miles.
		const confirmed = new Intl.NumberFormat().format(global.TotalConfirmed);
		const recovered = new Intl.NumberFormat().format(global.TotalRecovered);
		const deaths = new Intl.NumberFormat().format(global.TotalDeaths);

		return { data, confirmed, recovered, deaths };
	} catch (e) {
		console.error(e);
		return e;
	}
}

export async function getLocal() {
	try {
		const URL_API_LOCAL = "http://127.0.0.1:3000/api/Covid19s/summarylocal";
		const response = await axios(URL_API_LOCAL);
		const data = response.data;
		const local = data[data.length - 1];

		let dataConfirmed = data.map(local => {
			let data = {
				confirmed: local.Confirmed,
				date: local.Date
			}
			return (data);
		});
		let dataRecovered = data.map(local => {
			let data = {
				recovered: local.Recovered,
				date: local.Date
			}
			return (data);
		});
		let dataDeaths = data.map(local => {
			let data = {
				deaths: local.Deaths,
				date: local.Date
			}
			return (data);
		});

		const confirmed = new Intl.NumberFormat().format(local.Confirmed);
		const recovered = new Intl.NumberFormat().format(local.Recovered);
		const deaths = new Intl.NumberFormat().format(local.Deaths);

		return { dataConfirmed, dataRecovered, dataDeaths, confirmed, recovered, deaths };
	} catch (e) {
		console.error(e);
		return e;
	}
}
