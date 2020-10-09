//** Handle connection logic to the MongoDB Database */

const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();


mongoose.Promise = require("bluebird");

mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("DB Connected!");
}).catch((err) =>{
    console.log("Error occurred while attempting to connect!");
    console.log(err);
});


/** To prevent duplication warnings from native driver */
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {mongoose}