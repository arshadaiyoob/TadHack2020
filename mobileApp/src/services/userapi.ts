import { BASE_URL } from '../../config';
import axios from 'axios';

export const createAccount = (userData) => {
  axios.post(BASE_URL + "register", userData).then(res => { }).catch(err => { })
}
export const generateOTP = (phoneNumber) => {
  console.log(phoneNumber, "aaa")
  axios.get(BASE_URL + `generateOTP/${phoneNumber}`).then(res => {
    if (res.status === 200) {
      let data = res.data;
      return data;
    }
  }).catch(err => { })

}
validateOTP = (otpValue) => {
  axios.post(BASE_URL + "validateOTP").then(res => { }).catch(err => { })
}

login = (userObj) => {
  axios.post(BASE_URL + "login").then(res => { }).catch(err => { })
}

