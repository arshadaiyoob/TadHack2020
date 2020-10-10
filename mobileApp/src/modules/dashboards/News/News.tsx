
import React, { useState, useEffect }  from 'react';
import { Text, View,StatusBar,Image,Animated, TouchableOpacity, KeyboardAvoidingView,
  Platform,ScrollView } from 'react-native';
import BottomNavigator from '../BottomNavigator';
import NewsCard from '../../../component/NewsCard/NewsCard';
import styles from './News.styles';
import axios from 'axios';
import { BASE_URL } from '../../../../config';
import { Map } from 'react-leaflet';
const SUB_URL = "covid/"

const News =()=>{
  const [globalData, setGlobalData] = useState(null);
  
  useEffect(() => {
    axios.get(BASE_URL +SUB_URL+ `covidNewsFeeds`).then(res => { 
      if (res.status === 200) {
        let data = res.data;
        setGlobalData(data);
      }
    }).catch(err => { })

  });
    return(
     <View style={styles.container}>
       <View style={styles.innerContainer}>
         <View style={styles.headerContainer}>
         <Text style={{fontSize:26,marginLeft:30}}>NEWS FEED</Text>
         </View>
         <ScrollView style={{marginTop:30}}>
         
         {
           globalData? globalData.map(data => {
             return <NewsCard user={ data}/>
          }):<Text>No Data</Text>
         }
       
         </ScrollView>
       
       

       </View>
      <View><BottomNavigator isNews/></View>
      
     </View>
    );
  
};

export default News;

