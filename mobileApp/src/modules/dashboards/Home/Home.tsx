
import React from 'react';
import { Text, View,StatusBar,Image,Animated, TouchableOpacity, KeyboardAvoidingView,
  Platform,ScrollView } from 'react-native';
import BottomNavigator from '../BottomNavigator';
import styles from './Home.styles';




const Home =()=>{
   
    return(
     <View style={styles.container}>
         <View style={{flex:4,backgroundColor:'#ba4343',borderBottomRightRadius:250,borderBottomLeftRadius:250}}>
<View style={{flex:1,flexDirection:'row',alignContent:'center',justifyContent:'center',paddingTop:150,}}>
  <View style={{backgroundColor:'white',width:180,shadowColor:'grey',shadowOpacity:0.5,borderTopLeftRadius:8,borderBottomLeftRadius:8}}>
  </View>
  <View style={{backgroundColor:'white',width:180,shadowColor:'grey',shadowOpacity:0.5,borderTopRightRadius:8,borderBottomRightRadius:8,borderLeftWidth:2,borderColor:'#adadad'}}>

  </View>
</View>
         </View>
         <View style={{flex:8}}>

         </View>
       <BottomNavigator isHome/>
     </View>
    );
  
};

export default Home;

