const router = require('express').Router();
const axios = require('axios');
let nodeGeocoder = require('node-geocoder');

const url = 'https://covid19.mathdro.id/api';
console.log("im here")

let options = {
    provider: 'openstreetmap'
  };
   
  let geoCoder = nodeGeocoder(options);

//  Fetch Country based Data
const fetchData = async (country) =>{
    let changeableUrl =url;

    if(country){
        changeableUrl=`${url}/countries/${country}`;
    }
  
try{
    
    const {data:{confirmed,deaths,lastUpdate,recovered}}= await axios.get(changeableUrl);
    let confirmedobj=confirmed;
    let deathsdobj=deaths;
    let recovereddobj=recovered;
    let recoveringobj=(confirmedobj.value-recovereddobj.value)-deathsdobj.value;
    var date = lastUpdate;
    date = date.split('T')[0];
   
    let newObj={
        "Country":country,
        "Confirmed":confirmedobj.value,
        "Deaths":deathsdobj.value,
        "Recovered":recovereddobj.value,
        "Recovering":recoveringobj,
        "Updated Date":date
    }
  
    return newObj;
    
}
catch(error){
console.log(error);
}
}

//  Fetch Global Covid data
const fetchGlobalData = async () =>{
try{
    const {data:{confirmed,deaths,lastUpdate,recovered}}= await axios.get(url);

    let confirmedobj=confirmed;
    let deathsdobj=deaths;
    let recovereddobj=recovered;
    var date = lastUpdate;
    date = date.split('T')[0];
    let newObj={
        "Confirmed":confirmedobj.value,
        "Deaths":deathsdobj.value,
        "Recovered":recovereddobj.value,
        "Updated Date":date
    }
  
    return newObj;
}

catch(error){
console.log(error);
}
}

<<<<<<< HEAD
=======
// const fetchtest = async () =>{
//     try{
//         const data= await axios.get("https://www.hpb.health.gov.lk/api/get-current-statistical");
//         let obj=data.data.data;
//         let newObj={
//             "Local Deaths":obj['local_deaths'],
//             "Local Recovered":obj.local_recovered
//         }
//         console.log(JSON.stringify(newObj))
//         //let death=data['local_deaths'];
//        // console.log(death);
//         //console.log({data:{data:local_total_cases}});
//         return newObj;
//     }
    
//     catch(error){
//     console.log(error);
//     }
//     }


>>>>>>> 6fae10467e5eec293a4f10bbbe702a4373eea9c1

// Fetch Covid News
const fetchCovidNews = async () =>{
    let today = new Date().toISOString().slice(0, 10);
    var Url =
      "http://newsapi.org/v2/everything?" +
      "q=corona&" +
      "from=" +
      `${today}&` +
      "apiKey=4c73c5f5fb284b3e8c5d75bcd2674dbf&"
      +"language=en";

<<<<<<< HEAD
  

=======
>>>>>>> 6fae10467e5eec293a4f10bbbe702a4373eea9c1
try{
    console.log("shaaki");
    const data= await axios.get(Url);
    //console.log(data.data.articles);
    return data.data.articles;
    
}
catch(error){
console.log(error);
}
}



const fetchPCRLocations = async () =>{
    let URL="https://www.hpb.health.gov.lk/api/get-current-statistical";
    try{
       var datas= await axios.get(URL);
        const data=datas.data.data.hospital_data;
        return data;
    }   
    catch(error){
    console.log(error);
    }
    }
    

/**
 * POST /covid/covidPCRLocations
 * Purpose: Get PCR Locations
 */
router.get('/covidPCRLocations', async (req, res) =>{
    let body = req.body;
    let hospital_datas = await fetchPCRLocations();
  //  console.log(hospital_data);
    res.status(200).send(hospital_datas)  
    
})

<<<<<<< HEAD
/**
 * POST /covid/covidCountry
 * Purpose: Country based covid details
 */
router.post('/covidCountry', async (req, res) =>{
    let body = req.params.country;
    let data = await fetchData("India");
    console.log(data);
    res.status(200).send({data})  
=======
router.post('/covidCountry/:location', async (req, res) =>{
    let body = req.params.location;
    let data = await fetchData(body);
    res.status(200).send(data)  
>>>>>>> 6fae10467e5eec293a4f10bbbe702a4373eea9c1
})

/**
 * POST /covid/covidGlobal
 * Purpose: Global based covid details
 */
router.get('/covidGlobal', async (req, res) =>{
    let body = req.body;
    let data = await fetchGlobalData();
    console.log(data);
    res.status(200).send(data)  
    
})

/**
 * POST /covid/covidNewsFeeds
 * Purpose: Covid-19 News Feeds
 */
router.get('/covidNewsFeeds', async (req, res) =>{
    let body = req.body;
    let articles = await fetchCovidNews();

    res.status(200).send(articles)  
    
})

<<<<<<< HEAD
/**
 * POST /covid/covidLocation/:location
 * Purpose: Get Geo Cording
 */
router.post('/covidLocation/:location', async (req, res) =>{
=======
router.post('/covidPCRLocation/:location', async (req, res) =>{
>>>>>>> 6fae10467e5eec293a4f10bbbe702a4373eea9c1
    let body = req.params.location;
    console.log(body)
    geoCoder.geocode(body)
  .then((location)=> {
    res.status(200).send(location[0])  
  })
  .catch((err)=> {
    console.log(err);
  });

   
    
})
module.exports=router;