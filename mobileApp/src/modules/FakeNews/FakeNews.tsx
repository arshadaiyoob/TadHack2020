
import React, { Component } from 'react';
import {
    Text, View, StatusBar, Image, Animated, TouchableOpacity, KeyboardAvoidingView,
    Platform, ScrollView
} from 'react-native';
import { Button } from 'react-native-elements';
import arrow from '../../../assets/backArrow.png';
import profile from '../../../assets/profile.png';
import TextField from '../../component/Textfield/TextField';
import LottieView from 'lottie-react-native';
import styles from './FakeNews.styles';




export default class FakeNews extends Component {


    componentDidMount() {
        this.animation.play();
        this.animation2.play();

    }


    render() {





        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity><Image style={styles.imgStyle} source={arrow} /></TouchableOpacity>
                        <View style={styles.headerContainer}>
                            <Text style={{ fontSize: 20, marginLeft: 30 }}>WELCOME TO</Text>
                            <Text style={{ fontSize: 20, marginLeft: 30, marginTop: 10 }}>FAKE NEWS IDENTIFICATIONS</Text>
                        </View>
                    </View>

                    <ScrollView style={{ marginTop: 50 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.proStyle} source={profile} />
                            <TextField placeholder="Enter news" multiline style={{ height: 200, marginTop: 10 }} />
                        </View>
                        <View style={styles.btnContainer}>
                            <Button title="Check" buttonStyle={styles.buttonStyle} titleStyle={{ color: 'black' }} /></View>

                        <LottieView
                            ref={animation => {
                                this.animation = animation;
                            }}
                            style={{
                                width: 100,
                                height: 100,
                                alignSelf:'center',
                                marginTop:20
                            }}
                            source={require('../../../assets/tick.json')}
                        />
                        <LottieView
                            ref={animation2 => {
                                this.animation2 = animation2;
                            }}
                            style={{
                                width: 150,
                                height: 150,
                                alignSelf:'center',
                            }}
                            source={require('../../../assets/close.json')}
                        />
                    </ScrollView>



                </View>

            </View >
        );
    }
};


