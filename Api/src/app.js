const express = require('express');
const { mongoose } = require('./db/mongoose');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user.route');
const app = express();

app.use(bodyParser());
const middleware = "/api/v2/"
app.use(middleware+"user/", userRoute);
app.listen(4000, () =>{
    console.log("Server is running on port 4000");
})