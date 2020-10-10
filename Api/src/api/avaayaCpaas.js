var cpaas = require('@avaya/cpaas');
var enums = cpaas.enums;


var connector = new cpaas.CallConnector({
    accountSid: '',
    authToken: ''
});

callsConnector.makeCall({
    /* makeCall parameters */
}).then(function(result) { 
    /* do something with result */
}).catch(function(err){
    /* handle errors */
});
// connector.sendSmsMessage({
//     to: '',
//     from: '',
//     body: '',
//     statusCallback: '',
//     statusCallbackMe: enums.HttpMethod.GET,
//     allowMultiple: true
// }).then(function(data) {
//     console.log(data);
// });