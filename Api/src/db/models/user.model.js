//** Imports */
const mongoose = require('mongoose');
const _ = require('lodash');
const dotenv = require('dotenv');
const lStorage = require('localStorage');
const bcrypt = require('bcrypt');

dotenv.config();

//** UserSchema */
const UserSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    country: { 
        type: String,
        required: true,
    },
    phone: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

//** Instance Methods */

UserSchema.methods.toJson = function(){
    const user = this;
    const userObject = user.toObject();

    // returns the document expect password
    return _.omit(userObject, ["password"]);
}


/** Middleware */
//** Before a user is saved, this code runs */

UserSchema.pre("save", function(next) {
    let user = this;
    let costFactor = 10;

    if(user.isModified("password")) {
        // if the password field modified then run this code

        //** Generate Salt and hash the password */

        bcrypt.genSalt(costFactor, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            })
        })
    } else {
        next();
    }
});

//** Model Methods {Static Methods} */

UserSchema.statics.findByCredentials = function(phone, password){
    let user = this;
    return user.findOne({ phone }).then((usr) =>{
        if(!usr) return Promise.reject();
        
        return new Promise((resolve, reject) =>{
            bcrypt.compare(password, usr.password, (err, res) =>{
                if(res) resolve(usr);
                else{
                    reject();
                }
            });
        });
    });
}

UserSchema.statics.genOTP = function (phone){
    return new Promise((resolve, reject) =>{
        let code = Math.floor(100000 + Math.random() * 900000);
        lStorage.setItem(code, phone)
        return resolve(code);
    });
}

UserSchema.statics.verifyOTP = function(value) {
    let code = lStorage.getItem(value);
    if (code != null){
        lStorage.removeItem(value);
        return code;
    } else {
        return false;
    }

}
const User = mongoose.model('User', UserSchema);
module.exports = {User};

