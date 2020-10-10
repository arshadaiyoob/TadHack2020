const router = require('express').Router();
const { User } = require('../db/models');
const api = require('../api/sms');

//  Initiating IdeaMart Pro API
const sms = new api();

/**
 * POST /user/register
 * Purpose: Register
 */
router.post('/register', async (req, res) =>{
    let body = req.body;
    //Checking User already exist
    const userExist = await User.findOne({phone: body.phone});
    if(userExist) return res.status(400).send('User already Exist!');

    let newUser = new User(body)
    
    newUser.save()
    .then(() =>{
        return res.status(200).send(newUser);
    })
})

/**
 * POST /user/OTPSend
 * Purpose: Send OTP CODE
 */
router.post('/OTPSend', async(req,res) => {
    if(req.body.otp != null){
        sms.sendOTP(body.phone)
        res.status(200).send({status: "success"})
    }
});

/**
 * POST /user/OTPVerify
 * Purpose: Verify OTP CODE
 */
router.post('/OTPVerify', async(req,res) => {
    let otp = req.body.otp;
    let verify = await User.verifyOTP(otp);
    if(verify == req.body.phone){
        // sending a success status
        res.status(200).send({status: "success"})
    }
    else if(verify == false){
        //OTP is not valid 
        res.status(401).send("OTP Invalid!")
    }
});

/**
 * POST /user/login
 * Purpose: Login
 */
router.post('/login', async(req, res) =>{
    let phone = req.body.phone;
    let password = req.body.password;
    User.findByCredentials(phone, password)
        .then((user) =>{
            return res.status(200).send(user.toJson());
        })
})

module.exports = router;