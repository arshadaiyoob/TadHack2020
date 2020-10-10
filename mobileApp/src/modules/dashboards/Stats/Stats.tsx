
import React from 'react';
import { Text, View,StatusBar,Image,Animated, TouchableOpacity, KeyboardAvoidingView,
  Platform,ScrollView } from 'react-native';
import BottomNavigator from '../BottomNavigator';
import styles from './Stats.styles';




const Stats =()=>{
   
    return(
     <View style={styles.container}>
       <BottomNavigator isStats/>
     </View>
    );
  
};

export default Stats;

