
import React, { useState, useEffect }  from 'react';
import {
  Text, View, StatusBar, Image, Animated, TouchableOpacity, KeyboardAvoidingView,
  Platform, ScrollView
} from 'react-native';
import BottomNavigator from '../BottomNavigator';
import infected from '../../../../assets/infect.png';
import quarantine from '../../../../assets/quarantine.png';
import deaths from '../../../../assets/deaths.png';
import recovered from '../../../../assets/recovered.png';
import covid from '../../../../assets/covid.png';

import styles from './Home.styles';
import axios from 'axios';
import { BASE_URL } from '../../../../config';
const SUB_URL = "covid/"



const Home = () => {
  const [value, setValue] = useState(null);
  const [globalData, setGlobalData] = useState(null);
  
  useEffect(() => {
    axios.get(BASE_URL +SUB_URL+ `covidGlobal`).then(res => { 
      if (res.status === 200) {
        let data = res.data;
        setGlobalData(data);
      }
    }).catch(err => { })

    let country = "Sri Lanka";

    axios.post(BASE_URL + SUB_URL+ `covidLocation/${country}`).then(res => {
      if (res.status === 200) {
        let data = res.data;
        console.log(data)
        setValue(data);
      }
    }).catch(err => { })

  });
  return (
    <View style={styles.container}>
      
      <View style={{ flex: 4, backgroundColor: '#ba4343', borderBottomRightRadius: 250, borderBottomLeftRadius: 250 }}>
        <View style={{flex:1,flexDirection:'row',marginTop: 80, marginLeft: 30,}}>
        <Image style={{width:30,height:30}} source={covid}/>

          <Text style={{  fontSize: 24, color: 'white',fontWeight:'700',marginLeft:10 }}>COVID ZERO</Text></View>
   
      <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:30,marginRight:30,marginTop:-50}}><Text style={{ fontSize: 18, color: 'white' }}>Worldwide today</Text>
      <Text style={{ fontSize: 18, color: 'white' }}>{globalData? globalData['Updated Date']:""}</Text></View>
        
        <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center', justifyContent: 'center',marginTop:10}}>
          <View style={{ backgroundColor: 'white', width: 180, shadowColor: 'grey', shadowOpacity: 0.2, borderTopLeftRadius: 8, borderBottomLeftRadius: 8,alignItems:'center',justifyContent:'center' }}>
            <Text style={{color:'#999999',fontWeight:'500',fontSize:16}}>Infected</Text>
  < Text style = {{ fontWeight: '700', fontSize: 18, marginTop: 5 }}> {globalData? globalData.Confirmed:""}</Text>

          </View>
          <View style={{ borderLeftWidth: 2, borderColor: '#e8e8e8', backgroundColor: 'white' }} />
          <View style={{ backgroundColor: 'white', width: 180, shadowColor: 'grey', shadowOpacity: 0.2, borderTopRightRadius: 8, borderBottomRightRadius: 8,alignItems:'center',justifyContent:'center' }}>
          <Text style={{color:'#999999',fontWeight:'500',fontSize:16}}>Recovered</Text>
  < Text style = {{ fontWeight: '700', fontSize: 18, marginTop: 5 }}> { globalData? globalData.Recovered: ""}</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 8 }}>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:30,marginRight:30,marginTop:40}}>
        <Text style={{ fontSize: 18 }}>Sri Lanka today</Text>
  < Text style = {{ fontSize: 18 }}> {value ? value['Updated Date']: ""}</Text></View>
        <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center', justifyContent: 'center',marginTop:10}}>
          <View>
          <View style={{ backgroundColor: 'white', width: 180, borderRadius: 8,  height: 140 ,margin:5,shadowColor: 'grey', shadowOpacity: 0.2,alignItems:'center',justifyContent:'center'}}>
          <Image style={{width:40,height:40}} source={infected}/>
  <Text style={ { fontWeight: '800', fontSize: 20, marginTop: 5, color: '#A13333' } }> {value ? value['Confirmed']: ""}</Text>
          <Text style={{color:'#999999',fontWeight:'600',fontSize:14}}>Infected</Text>
          </View>
       
          <View style={{ backgroundColor: 'white', width: 180, borderRadius: 8, height: 140,margin:5,shadowColor: 'grey', shadowOpacity: 0.2, alignItems:'center',justifyContent:'center'}}>
          <Image style={{width:40,height:40}} source={quarantine}/>
          <Text style={{fontWeight:'800',fontSize:20,marginTop:5, color:'#D89813'}}>{value ? value['Recovering']: ""}</Text>
          <Text style={{color:'#999999',fontWeight:'600',fontSize:14}}>Under quarantine</Text>
          </View>
          
          </View>
          <View>
          <View style={{ backgroundColor: 'white', width: 180, borderRadius: 8,  height: 140 ,margin:5,shadowColor: 'grey', shadowOpacity: 0.2,alignItems:'center',justifyContent:'center'}}>
          <Image style={{width:50,height:50}} source={recovered}/>
          <Text style={{fontWeight:'800',fontSize:20,marginTop:5, color:'#19773F'}}>{value ? value['Recovered']: ""}</Text>
          <Text style={{color:'#999999',fontWeight:'600',fontSize:14}}>Recovered</Text>
          </View>
       
          <View style={{ backgroundColor: 'white', width: 180, borderRadius: 8, height: 140,margin:5,shadowColor: 'grey', shadowOpacity: 0.2,alignItems:'center',justifyContent:'center' }}>
          <Image style={{width:40,height:40}} source={deaths}/>
          <Text style={{fontWeight:'800',fontSize:20,marginTop:5, color:'#454545'}}>{value ? value['Deaths']: ""}</Text>
          <Text style={{color:'#999999',fontWeight:'600',fontSize:14}}>Deaths</Text>
          </View>
          
          </View>
          
        </View>
      
      </View>
    
    </View>
  );
};

export default Home;

