import { BASE_URL } from '../../config';
import axios from 'axios';
const SUB_URL = "covid/"

export const async getCovidDataByCountry = (country) => {
  await axios.post(BASE_URL + `covidCountry/${country}`).then(res => {
    if (res.status === 200) {
      let data = res.data;
      return data;
    }
  }).catch(err => { })
}

getCovidDataGlobal = () => {
  axios.get(BASE_URL + `covidGlobal`).then(res => { }).catch(err => { })
}

getNewsData = () => {
  axios.get(BASE_URL + `covidNewsFeeds`).then(res => { }).catch(err => { })
}

getPCRLocation = () => {
  axios.get(BASE_URL + `covidPCRLocations`).then(res => { }).catch(err => { })
}

getHospitalData = (location) => {
  axios.post(BASE_URL + `covidLocation/${location}`)
}
