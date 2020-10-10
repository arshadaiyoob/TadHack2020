
import React from 'react';
import { Text, View,StatusBar,Image,Animated, TouchableOpacity, KeyboardAvoidingView,
  Platform,ScrollView } from 'react-native';
import BottomNavigator from '../BottomNavigator';
import NewsCard from '../../../component/NewsCard/NewsCard';
import styles from './News.styles';




const News =()=>{
   
    return(
     <View style={styles.container}>
       <View style={styles.innerContainer}>
         <View style={styles.headerContainer}>
         <Text style={{fontSize:26,marginLeft:30}}>NEWS FEED</Text>
         </View>
         <ScrollView style={{marginTop:30}}>
         <NewsCard/>
       <NewsCard/>
       <NewsCard/>
       <NewsCard/>
         </ScrollView>
       
       

       </View>
      <View><BottomNavigator isNews/></View>
      
     </View>
    );
  
};

export default News;

