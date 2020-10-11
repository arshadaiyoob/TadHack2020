
import logoImage from '../../../../assets/logo.png';
import React,{useEffect} from 'react';
import { Text, View,StatusBar,Image,Animated, TouchableOpacity } from 'react-native';
import Button from '../../../component/Button/Button'
import styles from './Landing.styles';
import PhoneInput from 'react-native-phone-number-input';
import color from '../../../styles/color';


interface Props {}
interface State {}

const Landing =(props)=>{
   const fadeAnim=new Animated.Value(0);

  
 
    useEffect(()=>{
        Animated.timing(
            fadeAnim,
            {
              toValue:1,
              duration:1000,
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
    <Animated.Image
          style={[styles.logoImage,{ opacity:fadeAnim} ]}
          resizeMode="contain"
          source={logoImage}
          
        />
    </View>
    <Animated.View style={[styles.bottomContainer,{ transform: [{
            translateY: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [250, 0]  // 0 : 150, 0.5 : 75, 1 : 0
            }),
          }]}]}>
        <Text style={styles.text}>WELCOME,</Text>
        <View style={styles.mobileStyle}>
                  <Text style={styles.mobileText}>MOBILE</Text>
                  <TouchableOpacity onPress={()=>{
                    console.log('pressed')
                    props.navigation.navigate("PhoneNumber");
                  }}>
                       <PhoneInput
            defaultCode="US"
            withDarkTheme
            placeholder='Enter your mobile #'
            textContainerStyle={styles.textContainerStyle}
            disabled={true} 
          /></TouchableOpacity>
             
                </View>
    </Animated.View>

      </View>
    );
  
};

export default Landing;

