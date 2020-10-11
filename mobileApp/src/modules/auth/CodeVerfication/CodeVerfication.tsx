import arrow from '../../../../assets/back.png';
import React,{useEffect,useState} from 'react';
import { Text, View,StatusBar,Image,Animated, TouchableOpacity, KeyboardAvoidingView,
  Platform,ScrollView } from 'react-native';
import styles from './CodeVerification.styles';
import TextField from '../../../component/Textfield/TextField';
import PhoneInput from 'react-native-phone-number-input';
import CodeInputField from '../../../component/CodeInputField/CodeInputField';
import {Button} from 'react-native-elements';
// import { validateOTP } from '../../../services/userapi';


const CodeVerification =(props)=>{

   const fadeAnim=new Animated.Value(0);
   const handleOnFulfill = (code: string): void => {
    //  validateOTP(code);
     
     let obj = {
      phone: phoneNo,
      otp:code
    }
    await axios.post(BASE_URL +SUB_URL+ "validateOTP",obj).then(res => {
      if (res.status === 200) {
        // props.navigation.navigate("");
        // return data;
      }
     }).catch(err => { return err.data; })
  };
  const [value, setValue] = useState("");

 
    useEffect(()=>{
        Animated.timing(
            fadeAnim,
            {toValue:1,
              duration:500,
              useNativeDriver:false
            }).start();
            
    },[fadeAnim])
    return(
      <View style={styles.container}>
          <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
    <View style={styles.innerContainer}>
      <TouchableOpacity >
      <Image source={arrow} style={styles.imageStyle}/>
      </TouchableOpacity>
     
    <Text style={styles.topText}>WELCOME</Text>
    <View/>
    </View>
    <Animated.View style={[styles.bottomContainer,{ transform: [{
            translateY: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [650, 0]  
            }),
          }]}]}>
                  <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.bottomContainer}>
          <ScrollView
              style={styles.keyboardAwareContentContainer}
              showsVerticalScrollIndicator={false}>
                <View style={styles.descriptionWrapper}>
              <Text style={styles.description}> Enter the 6-digit code sent to you at
                  </Text>
                  <Text style={styles.phoneNumber}> +94771234567</Text>
                  <View style={styles.textInput}>
                      <Text style={styles.label}>VERIFICATION CODE</Text>
                  <CodeInputField     
                  handleOnFulfill={handleOnFulfill}/>
                  </View>
                  
              </View>
              <View style={styles.btnContainer}>
        <Button title="CONTINUE" onPress={()=>{props.navigation.navigate("CreateAccount")}} buttonStyle={styles.buttonStyle}/></View> 
              </ScrollView>
         
        </KeyboardAvoidingView>
    </Animated.View>

      </View>
    );
  
};

export default CodeVerification;