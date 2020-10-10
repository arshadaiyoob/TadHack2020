
import React from 'react';
import { Text, View,StatusBar,Image,Animated, TouchableOpacity, KeyboardAvoidingView,
  Platform,ScrollView, Dimensions } from 'react-native';
import Collapsible from '../../component/Collapsible/Collapsible';
import styles from './Pcr.styles';




const Pcr =()=>{
   
    return(
     <View style={styles.container}>
         
         <View style={{flex:2, backgroundColor:'#ba4343',borderBottomLeftRadius:300,borderBottomRightRadius:300}}>
         {/* <Collapsible/> */}
         </View>
         <View style={{flex:4, backgroundColor:'white'}}>
         <View style={{
         backgroundColor:'white',
         width:Dimensions.get('window').width-50,alignSelf:'center',
         justifyContent:'center',flex:1,marginTop:-150,
         shadowColor:'grey',shadowOpacity:0.2,borderRadius:8}}>
            
         </View>
         </View>
        
       
         
     </View>
    );
  
};

export default Pcr;

