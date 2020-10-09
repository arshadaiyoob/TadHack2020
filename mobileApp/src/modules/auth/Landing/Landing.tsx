
import logoImage from '../../../../assets/logo.png';
import React,{useEffect} from 'react';
import { Text, View,StatusBar,Image,Animated } from 'react-native';
import Button from '../../../component/Button/Button'
import styles from './Landing.styles';


interface Props {}
interface State {}

const Landing =()=>{
   const fadeAnim=new Animated.Value(0);

  
 
    useEffect(()=>{
        Animated.timing(
            fadeAnim,
            {
              toValue:1,
              duration:1000
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
        <Text style={styles.text}>Stay home, save lives</Text>
    </Animated.View>

      </View>
    );
  
};

export default Landing;

