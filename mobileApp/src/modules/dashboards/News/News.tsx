
import React from 'react';
import { Text, View,StatusBar,Image,Animated, TouchableOpacity, KeyboardAvoidingView,
  Platform,ScrollView } from 'react-native';
import BottomNavigator from '../BottomNavigator';
import styles from './News.styles';




const News =()=>{
   
    return(
     <View style={styles.container}>
       <BottomNavigator isNews/>
     </View>
    );
  
};

export default News;

