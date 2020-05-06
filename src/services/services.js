import { API_BASE_URL, API_COVID19_URL } from "../config/api.js";
import axios from "axios";

export async function countCasos() {
  try {
    const url = `${API_BASE_URL}/Inscovid19s/count`;
    const response = await axios.get(url);
    const data = response.data.count;
    return data;
  } catch (e) {
    console.error(e);
    return e;
  }
}

export async function totalEstado(estado) {
  try {
    const url = `${API_BASE_URL}/Inscovid19s/totalEstado?atencion=${estado}`;
    const response = await axios.get(url);
    const data = response.data[0].total;
    return data;
  } catch (e) {
    console.error(e);
    return e;
  }
}

export async function getGlobal() {
  try {
    const url = `${API_COVID19_URL}/summary`;
    const response = await axios.get(url);
    const data = response.data;
    const global = data.Global;
    // TODO: cambiar coma por punto en separador de miles.
    const confirmed = new Intl.NumberFormat().format(global.TotalConfirmed);
    const recovered = new Intl.NumberFormat().format(global.TotalRecovered);
    const deaths = new Intl.NumberFormat().format(global.TotalDeaths);
    // TODO: envio la Data Global para luego hacer filtro
    return { data, confirmed, recovered, deaths };
  } catch (e) {
    console.error(e);
    return e;
  }
}

export async function getCountry(country) {
  try {
    const url = `${API_COVID19_URL}/dayone/country/${country}`;
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
    return e;
  }
}

export async function getData(enpoint) {
  try {
    const url = `${API_BASE_URL}/Inscovid19s/${enpoint}`;
    const response = await axios(url);
    const data = response.data;
    return data;
  } catch (e) {
    console.error(e);
    return e;
  }
}

export async function getLastRow(totalConfirmados) {
  try {
    const url = `${API_BASE_URL}/Inscovid19s?filter[where][id]=${totalConfirmados}`;
    const response = await axios(url);
    const data = response.data;
    return data;
  } catch (e) {
    console.error(e);
    return e;
  }
}

export async function getRangeAge(atencion) {
  try {
    const url = `${API_BASE_URL}/Inscovid19s/totalRangoEdad?atencion=${atencion}`;
    const response = await axios(url);
    const data = response.data;
    return data;
  } catch (e) {
    console.error(e);
    return e;
  }
}
