const im = require("ideamart.js");
const https = require("https");
const { User } = require('../db/models');
const fs = require("fs");
var path = require("path");

module.exports = class sms {
    constructor() {
        var SMS = new im.SMS({
          applicationID: "APP_059547",
          password: "02ae83b47b9335880a9f4c9e15f95dab",
          url: 'http://localhost:7000/sms/send',
          webhook: '/mo-receiver'
        });
    }

    async sendOTP(phone){
        var SMS = new im.SMS({
            applicationID: "APP_059547",
            password: "02ae83b47b9335880a9f4c9e15f95dab",
            url: 'http://localhost:7000/sms/send',
            webhook: '/mo-receiver'
          });
        let OTPCode = await User.genOTP(phone)
        console.log(OTPCode);
        SMS.sendTextMessage(
          {
            destination: "tel:"+`${phone}`,
            message: "Welcome to Covid Zero. Your OTP: "+`${OTPCode}`,
            deliveryStatus: false,
          },
          function (err, status) {
            console.log(status);
          }
        );
        
        SMS.on("message", function (message) {
          console.log(message, "sms");
        });
    }
    
    runServer(){
        https
          .createServer(
            {
              key: fs.readFileSync(path.resolve("src/api/server.key")),
              cert: fs.readFileSync(path.resolve("src/api/server.crt")),
            },
            function (req, res) {
              SMS.messageHandler(req, res, function (err) {
                console.log(req.statusCode);
                res.statusCode = 404;
                res.end("You've visited the wrong page, buddy.");
              });
            }
          )
          .listen(5556, ()=>{
              console.log("Mobile Services running on port 5556");
          });
    }

}
