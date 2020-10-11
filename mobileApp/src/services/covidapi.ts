import { BASE_URL } from '../../config';
import axios from 'axios';
const SUB_URL = "covid/"

let globalData;

let  getCovidDataByCountry = async (country) => {
  await axios.post(BASE_URL + SUB_URL+ `covidCountry/${country}`).then(res => {
    if (res.status === 200) {
      let data = res.data;
      // console.log(data)
      return data;
    }
  }).catch(err => { })
}

let getCovidDataGlobal = async () => {
  await axios.get(BASE_URL +SUB_URL+ `covidGlobal`).then(res => { 
    if (res.status === 200) {
      let data = res.data;
      globalData = data;
      // console.log(data,"ddd");
      return globalData;
    }
  }).catch(err => { })
}

// let getNewsData = async() => {
//   await axios.get(BASE_URL + `covidNewsFeeds`).then(res => { }).catch(err => { })
// }

// let getPCRLocation = async() => {
//   await axios.get(BASE_URL + `covidPCRLocations`).then(res => { }).catch(err => { })
// }

// let getHospitalData = async(location) => {
//   await axios.post(BASE_URL + `covidLocation/${location}`).then(res => {
    
//   })
// }

module.exports={getCovidDataByCountry,getCovidDataGlobal,globalData}