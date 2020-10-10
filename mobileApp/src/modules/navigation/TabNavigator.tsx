import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Component } from 'react';
import {
  HomeStackNavigator,
  NewsStackNavigator,
  StatsStackNavigator,
  MapStackNavigator,
} from "./StackNavigator";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Text,
  Alert,
} from "react-native";
import phone from "../../../assets/phone.png";
import home from "../../../assets/home.png";
import map from "../../../assets/map.png";
import stats from "../../../assets/stats.png";
import news from "../../../assets/news.png";

const Tab = createBottomTabNavigator();
interface customProps {
  isHome?: boolean;
  isNews?: boolean;
  isMap?: boolean;
  isStats?: boolean;
}

const BottomTabNavigator: React.FC<customProps> = (props) => {
  const { isHome, isNews, isMap, isStats } = props;

  return (
    <View style={styles.container}>
      {/* <View style={{
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
                </View> */}
      <Tab.Navigator tabBarOptions={
            {
                style: {
                  position: 'absolute', backgroundColor: 'white', borderRadius: 3, shadowRadius: 3, shadowOpacity: 0.3,
                        shadowOffset: {
                            height: 3, width: 3
                        },
                        marginVertical: 5,
                  bottom: -10, width: '100%', height: 80, flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, paddingHorizontal: 25

                },
                activeTintColor: '#845EC2',
            }
        }>
      
        <Tab.Screen
          name="Home"
          component={HomeStackNavigator}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: isHome ? "black" : "gray",
                    }}
                    source={home}
                  ></Image>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="News"
          component={NewsStackNavigator}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: isNews ? "black" : "gray",
                    }}
                    source={news}
                  ></Image>
                
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="phone"
          component={StatsStackNavigator}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <View
                style={{
                  position: 'absolute',
                    alignSelf: 'center',
                    backgroundColor: 'transparent',
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    bottom: 35,
                    zIndex: 10
                }}
              >
                
                <View style={[styles.button, styles.actionBtn]}>
                            <Image style={{ width: 58, height: 58 }} resizeMode='contain' source={phone} />
                        </View>
                
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Stats"
          component={StatsStackNavigator}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: isStats ? "black" : "gray",
                    }}
                    source={stats}
                  ></Image>
                
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapStackNavigator}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: isMap ? "black" : "gray",
                    }}
                    source={map}
                  ></Image>
                
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BottomTabNavigator;
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