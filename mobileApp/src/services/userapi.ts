import { BASE_URL } from '../../config';
import axios from 'axios';

const SUB_URL = "user/";

let createAccount = async(userData) => {
  await axios.post(BASE_URL + SUB_URL + "register", userData).then(res => {
    if (res.status === 200) {
      let data = res.data;
      return data;
    }
  }).catch(err => { })
};

let generateOTP = async (phoneNumber) => {
  await axios.get(BASE_URL + SUB_URL+`generateOTP/${phoneNumber}`).then(res => {
    if (res.status === 200) {
      let data = res.data;
      return data;
    }
  }).catch(err => { return err.data;})

}


let validateOTP = async (otpValue,phoneNo) => {
  let obj = {
    phone: phoneNo,
    otp:otpValue
  }
  await axios.post(BASE_URL +SUB_URL+ "validateOTP",obj).then(res => {
    if (res.status === 200) {
      let data = res.data;
      return data;
    }
   }).catch(err => { return err.data; })
}


let login = async (userObj) => {
  await axios.post(BASE_URL + "login").then(res => { }).catch(err => { })
}

module.exports={createAccount,generateOTP, validateOTP, login}