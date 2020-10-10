import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Text, Alert } from 'react-native';
import { MainStackNavigator, NewsStackNavigator, StatsStackNavigator,MapStackNavigator } from './StackNavigator'

import phone from '../../../assets/phone.png'
import home from '../../../assets/home.png';
import map from '../../../assets/map.png';
import stats from '../../../assets/stats.png';
import news from '../../../assets/news.png';

interface customProps{
isHome?: boolean;
isNews?: boolean;
isMap?: boolean;
isStats?: boolean;

}


const BottomNavigator: React.FC<customProps> = props =>{
    const {
        isHome,
        isNews,
        isMap,
        isStats
      } = props;


        return (
            <View style={styles.container}>
                <View style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    backgroundColor: 'transparent',
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    bottom: 35,
                    zIndex: 10
                }}>
                    <TouchableWithoutFeedback >
                        <View style={[styles.button, styles.actionBtn]}>
                            <Image style={{ width: 58, height: 58 }} resizeMode='contain' source={phone} />
                        </View>
                    </TouchableWithoutFeedback>

                </View>
                <View
                    style={{
                        position: 'absolute', backgroundColor: 'white', borderRadius: 3, shadowRadius: 3, shadowOpacity: 0.3,
                        shadowOffset: {
                            height: 3, width: 3
                        },
                        marginVertical: 5,
                        bottom: -10, width: '100%', height: 80, flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, paddingHorizontal: 25
                    }}
                >
                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>
                        <TouchableOpacity>
                            <Image style={{ width: 30, height: 30, tintColor: isHome? 'black':'gray' }} source={home}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>
                        <TouchableOpacity>
                            <Image style={{ width: 30, height: 30 ,tintColor: isNews? 'black':'gray'}} source={news}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>
                        <TouchableOpacity>
                            <Image style={{ width: 30, height: 30,tintColor: isStats? 'black':'gray' }} source={stats}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>
                        <TouchableOpacity>
                            <Image style={{ width: 30, height: 30,tintColor: isMap? 'black':'gray' }} source={map}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )


    
}
export default BottomNavigator;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'grey',
        shadowOpacity: 5.0,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 2,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 0,
        top: 5,
        left: 5,
      

    },
    actionBtn:{
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        backgroundColor:'white',
        borderWidth:2,
        borderColor:'white'
    }

});