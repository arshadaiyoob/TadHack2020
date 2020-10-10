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
        console.log(changeableUrl);
    }
  
try{
    const {data:{confirmed,deaths,lastUpdate,recovered}}= await axios.get(changeableUrl);

    console.log({confirmed,deaths,lastUpdate,recovered});
    return {confirmed,deaths,lastUpdate,recovered};
    
}
catch(error){
console.log(error);
}
}

//  Fetch Global Covid data
const fetchGlobalData = async () =>{
try{
    const {data:{confirmed,deaths,lastUpdate,recovered}}= await axios.get(url);

    console.log({confirmed,deaths,lastUpdate,recovered});
    return {confirmed,deaths,lastUpdate,recovered};
}

catch(error){
console.log(error);
}
}


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

  

try{
    const {data:articles}= await axios.get(Url);


    return {articles};
    
}
catch(error){
console.log(error);
}
}



const fetchPCRLocations = async () =>{
    let URL="https://www.hpb.health.gov.lk/api/get-current-statistical";
    try{
       var datas= await axios.get(URL);
       // const {data}= datas.hospital_data;
        console.log("datas.data.hospital_data");
       // console.log(datas.data.data.hospital_data);
        const data=datas.data.data.hospital_data;
        console.log(data.data);
     //   const {summa:{id}}= data.hospital;

        return {data};
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
    res.status(200).send({hospital_datas})  
    
})

/**
 * POST /covid/covidCountry
 * Purpose: Country based covid details
 */
router.post('/covidCountry', async (req, res) =>{
    let body = req.params.country;
    let data = await fetchData("India");
    console.log(data);
    res.status(200).send({data})  
})

/**
 * POST /covid/covidGlobal
 * Purpose: Global based covid details
 */
router.get('/covidGlobal', async (req, res) =>{
    let body = req.body;
    let data = await fetchGlobalData();
    console.log(data);
    res.status(200).send({data})  
    
})

/**
 * POST /covid/covidNewsFeeds
 * Purpose: Covid-19 News Feeds
 */
router.get('/covidNewsFeeds', async (req, res) =>{
    let body = req.body;
    let articles = await fetchCovidNews();
    console.log(articles);
    res.status(200).send({articles})  
    
})

/**
 * POST /covid/covidLocation/:location
 * Purpose: Get Geo Cording
 */
router.post('/covidLocation/:location', async (req, res) =>{
    let body = req.params.location;
    console.log(body)
    geoCoder.geocode(body)
  .then((loco)=> {
    res.status(200).send(loco)  
    //console.log(loco);
  })
  .catch((err)=> {
    console.log(err);
  });
    // let articles = await fetchCovidNews();
    // console.log(articles);
   
    
})
module.exports=router;