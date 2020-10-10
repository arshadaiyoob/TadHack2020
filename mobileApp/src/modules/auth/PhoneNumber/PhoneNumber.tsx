
import arrow from '../../../../assets/back.png';
import React, { useEffect, useState } from 'react';
import {
  Text, View, StatusBar, Image, Animated, TouchableOpacity, KeyboardAvoidingView,
  Platform, ScrollView
} from 'react-native';
import styles from './PhoneNumber.styles';
import TextField from '../../../component/Textfield/TextField';
import PhoneInput from 'react-native-phone-number-input';
import { Button } from 'react-native-elements';
import { generateOTP } from '../../../services/userapi';

let phoneNumberInput = "";
const PhoneNumber = () => {

  const fadeAnim = new Animated.Value(0);

  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 500,
        useNativeDriver: false
      }).start();

  }, [fadeAnim])
  return (
    <View style= { styles.container } >
    <StatusBar
        translucent
  backgroundColor = "transparent"
  barStyle = "dark-content"
    />
    <View style={ styles.innerContainer }>
      <TouchableOpacity>
      <Image source={ arrow } style = { styles.imageStyle } />
        </TouchableOpacity>

        < Text style = { styles.topText } > WELCOME < /Text>
          < View />
          </View>
          < Animated.View style = {
            [styles.bottomContainer, {
              transform: [{
                translateY: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [650, 0]
                }),
              }]
            }]} >
            <KeyboardAvoidingView
        behavior={ Platform.OS === 'ios' ? 'padding' : undefined }
  style = { styles.bottomContainer } >
    <ScrollView
              style={ styles.keyboardAwareContentContainer }
  showsVerticalScrollIndicator = { false} >
    <View style={ styles.mobileStyle }>
      <Text style={ styles.text }> MOBILE < /Text>

        < PhoneInput
  defaultCode = "US"
  withDarkTheme
  placeholder = 'Enter your mobile #'
  textContainerStyle = { styles.textContainerStyle }
  defaultValue = { value }
  onChangeText = {(text) => {
  // setValue(text);
  phoneNumberInput = text;

}}
onChangeFormattedText = {(text) => {
  // setFormattedValue(text);
  console.log(text)

}}

/>
  < /View>
  < View style = { styles.btnContainer } >
    <Button title="NEXT" onPress = {()=> generateOTP(phoneNumberInput) } buttonStyle = { styles.buttonStyle } />
      < /View> 
      < /ScrollView>

      < /KeyboardAvoidingView>
      < /Animated.View>

      < /View>
    );
  
};

export default PhoneNumber;

