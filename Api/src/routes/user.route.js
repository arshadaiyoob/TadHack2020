const router = require('express').Router();
const { User } = require('../db/models');
const api = require('../api/sms');


const sms = new api();

router.post('/register', async (req, res) =>{
    let body = req.body;
    //Checking User already exist
    const userExist = await User.findOne({phone: body.phone});
    if(userExist) return res.status(400).send('User already Exist!');

    let newUser = new User(body)
    
    newUser.save()
    .then(() =>{
        sms.sendOTP(body.phone)
        return res.status(200).send(newUser);
    })
})

router.post('/OTP', async(req,res) => {
    let otp = req.body.otp;
    let verify = await User.verifyOTP(otp);
    if(verify == req.body.phone){
        res.status(200).send({status: "success"})
    }
    else if(verify == false){
        res.status(401).send("OTP Invalid!")
    }
});

router.post('/login', async(req, res) =>{
    let phone = req.body.phone;
    let password = req.body.password;
    User.findByCredentials(phone, password)
        .then((user) =>{
            return res.status(200).send(user.toJson());
        })
})

module.exports = router;