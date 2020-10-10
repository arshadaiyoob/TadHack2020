const router = require('express').Router();
const axios = require('axios');

const url = 'https://covid19.mathdro.id/api';
console.log("im here")


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

const fetchCovidNews = async () =>{
    let Url ='https://newsapi.org/v2/everything?q=corona&from=2020-15-09&sortBy=publishedAt&apiKey=7e1ea103798448aca261b88331421d08&pageSize=50&page=1';

try{
    const {data:{articles:[author,title]}}= await axios.get(Url);

    console.log({articles});
    return {articles};
    
}
catch(error){
console.log(error);
}
}

router.post('/covidCountry/:country', async (req, res) =>{
    let body = req.params.country;
    let data = await fetchData(body);
    console.log(data);
    res.status(200).send({data})  
})

router.get('/covidGlobal', async (req, res) =>{
    let body = req.body;
    let data = await fetchGlobalData();
    console.log(data);
    res.status(200).send({data})  
    
})

router.get('/covidNewsFeeds', async (req, res) =>{
    let body = req.body;
    let data = await fetchCovidNews();
    console.log(data);
    res.status(200).send({data})  
    
})
module.exports=router;