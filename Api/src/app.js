const express = require('express');
const { mongoose } = require('./db/mongoose');
const bodyParser = require('body-parser');
const api = require('./api/sms');
const userRoute = require('./routes/user.route');
const covidRoute = require('./routes/covid.routes');
const app = express();
let sms = new api();

app.use(bodyParser.json());
const middleware = "/api/v2/"
app.use(middleware+"user/", userRoute);
<<<<<<< HEAD
sms.runServer();
=======
app.use(middleware+"covid/", covidRoute);
>>>>>>> 5824b2890ff7d7c074e64738aa1675cddf40870a
app.listen(4000, () =>{
    console.log("Server is running on port 4000");
})