
import React, { useState, useEffect }  from 'react';
import {
    Text, View, StatusBar, Image, Animated, TouchableOpacity, KeyboardAvoidingView,
    Platform, ScrollView, Dimensions
} from 'react-native';
import Collapsible from '../../component/Collapsible/Collapsible';
import arrow from '../../../assets/backArrow.png';
import styles from './Pcr.styles';
const SUB_URL = "covid/"

import { BASE_URL } from '../../../config';
import axios from 'axios';

const Pcr = () => {
  const [globalData, setGlobalData] = useState(null);
  
  useEffect(() => {
    axios.get(BASE_URL +SUB_URL+ `covidPCRLocations`).then(res => { 
      if (res.status === 200) {
        let data = res.data;
        setGlobalData(data);
      }
    }).catch(err => { })

  });
    return (
        <View style={styles.container}>

            <View style={{ flex: 2, backgroundColor: '#ba4343', borderBottomLeftRadius: 300, borderBottomRightRadius: 300 }}>
                <View style={{ flexDirection: 'row', alignSelf: 'center', paddingTop: 80, justifyContent: 'space-between', paddingLeft: 20 }}>
                    <Image style={{ width: 20, height: 20, tintColor: 'white', marginTop: 7 }} source={arrow} />
                    <Text style={{ color: 'white', fontSize: 28, flex: 1, textAlign: 'center', marginRight: 20 }}>PCR Locations</Text>
                </View>
            </View>
            <View style={{ flex: 4, backgroundColor: 'white' }}>
                <View style={{
                    backgroundColor: '#fafafa',
                    width: Dimensions.get('window').width - 30, alignSelf: 'center',
                    flex: 1, marginTop: -150,
                    shadowColor: 'grey', shadowOpacity: 0.2, borderRadius: 8
                }}>
  <View style={ { marginTop: 30 } }>
                      
                      <Collapsible pcrLocation={globalData}/>
                    </View>

                </View>
            </View>



        </View>
    );

};

export default Pcr;

