
import arrow from '../../../../assets/back.png';
import React,{useEffect} from 'react';
import { Text, View,StatusBar,Image,Animated, TouchableOpacity, KeyboardAvoidingView,
  Platform,ScrollView } from 'react-native';
import styles from './GrantAccess.styles';
import TextField from '../../../component/Textfield/TextField';
import {Button} from 'react-native-elements';
import PhoneInput from 'react-native-phone-number-input';
import color from '../../../styles/color';



const GrantAccess =()=>{
   const fadeAnim=new Animated.Value(0);

  
 
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
     
    <Text style={styles.topText}>GRANT ACCESS</Text>
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
                    <View style={styles.nameWrapper}>
                      <View style={styles.firstNameWrapper}>
                      <Text style={styles.text}>FIRST NAME</Text>
                  <TextField   placeholder="Enter first name" />
                      </View>
                 <View style={styles.lastNameWrapper}><Text style={styles.text}>LAST NAME</Text>
                  <TextField  placeholder="Enter last name"  /></View>
                  
                  </View>
                  <View style={styles.mobileStyle}>
                  <Text style={styles.text}>MOBILE</Text>
                <PhoneInput
            defaultCode="US"
            withDarkTheme
            placeholder="Enter mobile #"
            textContainerStyle={styles.textContainerStyle}
            textInputStyle={styles.textInputStyle} 
          />
                </View>
                  
                  <View style={styles.btnContainer}>
                  <TouchableOpacity >
                      <Text style={styles.cancelBtn}>Cancel</Text></TouchableOpacity>
        <Button title="GRANT ACCESS"  buttonStyle={styles.buttonStyle}/></View> 
              </ScrollView>
         
        </KeyboardAvoidingView>
    </Animated.View>

      </View>
    );
  
};

export default GrantAccess;

