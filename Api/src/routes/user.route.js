const router = require('express').Router();
const { User } = require('../db/models');

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

router.post('/login', async(req, res) =>{
    let phone = req.body.phone;
    let password = req.body.password;
    User.findByCredentials(phone, password)
        .then((user) =>{
            return res.status(200).send(user.toJson());
        })
})

module.exports = router;