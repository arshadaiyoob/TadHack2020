
import React from 'react';
import { Text, View,StatusBar,Image,Animated, TouchableOpacity, KeyboardAvoidingView,
  Platform,ScrollView } from 'react-native';
import BottomNavigator from '../BottomNavigator';
<<<<<<< HEAD
// import BottomNavigator from '../../navigation/TabNavigator';
=======
import NewsCard from '../../../component/NewsCard/NewsCard';
>>>>>>> 671b24f6bcf1a5261015dedc7ab900fa00644150
import styles from './News.styles';




const News =()=>{
   
    return(
     <View style={styles.container}>
<<<<<<< HEAD
       
=======
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
      
>>>>>>> 671b24f6bcf1a5261015dedc7ab900fa00644150
     </View>
    );
  
};

export default News;

