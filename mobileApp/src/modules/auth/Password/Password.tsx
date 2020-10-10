
import arrow from '../../../../assets/back.png';
import React,{useEffect} from 'react';
import { Text, View,StatusBar,Image,Animated, TouchableOpacity, KeyboardAvoidingView,
  Platform,ScrollView } from 'react-native';
import styles from './Password.styles';
import TextField from '../../../component/Textfield/TextField';
import {Button} from 'react-native-elements';



const Password =()=>{
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
     
    <Text style={styles.topText}>WELCOME BACK</Text>
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
                  <View style={styles.textInput}>
                  <Text style={styles.text}>PASSWORD</Text>
                  <TextField  placeholder="Password"  secureTextEntry/>
                  </View>
                  
                  <View style={styles.btnContainer}>
        <Button title="CONTINUE"  buttonStyle={styles.buttonStyle}/></View> 
              </ScrollView>
         
        </KeyboardAvoidingView>
    </Animated.View>

      </View>
    );
  
};

export default Password;

