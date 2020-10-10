const express = require('express');
const { mongoose } = require('./db/mongoose');
const bodyParser = require('body-parser');
const api = require('./api/sms');
const userRoute = require('./routes/user.route');
const app = express();
let sms = new api();

app.use(bodyParser.json());
const middleware = "/api/v2/"
app.use(middleware+"user/", userRoute);
sms.runServer();
app.listen(4000, () =>{
    console.log("Server is running on port 4000");
})