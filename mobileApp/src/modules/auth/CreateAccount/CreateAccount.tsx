
import arrow from '../../../../assets/back.png';
import mark from '../../../../assets/mark.png';
import quest from '../../../../assets/question.png';
import React,{useEffect, useState} from 'react';
import { Text, View,StatusBar,Image,Animated, TouchableOpacity, KeyboardAvoidingView,
  Platform,ScrollView} from 'react-native';
import styles from './CreateAccount.styles';
import TextField from '../../../component/Textfield/TextField';
import Modal from 'react-native-modal';
import {Button} from 'react-native-elements'
import Password from '../Password/Password';

import { createAccount } from '../../../services/userapi';

const CreateAccount =()=>{
   const fadeAnim=new Animated.Value(0);
  const [modalVisible, setModalVisible] = useState(false);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");

   const closeModal =()=>{
       setModalVisible(false);
   }
    useEffect(()=>{
        Animated.timing(
            fadeAnim,
            {toValue:1,
              duration:500,
              useNativeDriver:false
            }).start();
            
    },[fadeAnim])
    return(
      <View style={styles.container}>
          <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
    <View style={styles.innerContainer}>
      <TouchableOpacity >
      <Image source={arrow} style={styles.imageStyle}/>
      </TouchableOpacity>
     
    <Text style={styles.topText}>CREATE ACCOUNT</Text>
    <View/>
    </View>
    <Animated.View style={[styles.bottomContainer,{ transform: [{
            translateY: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0]  
            }),
          }]}]}>
                  <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.bottomContainer}>
          <ScrollView
              style={styles.keyboardAwareContentContainer}
              showsVerticalScrollIndicator={false}>
                  <TouchableOpacity onPress={() => {
          setModalVisible(true);
        }}>
      <Image source={quest} style={styles.questStyle}/>
      </TouchableOpacity>
                  <View style={styles.textStyle}>
                  <Text style={styles.text}>FIRST NAME</Text>
                    < TextField
                    onChangeText={value => setFirstName(value)}
                    placeholder = "Enter your first name" />
                  </View>
                  <View style={styles.textInput}>
                  <Text style={styles.text}>LAST NAME</Text>
                    < TextField
                    onChangeText={value => setLastName(value)}

placeholder = "Enter you last name" />
                  </View>
                  <View style={styles.textInput}>
                  <Text style={styles.text}>PASSWORD</Text>
  < TextField
  onChangeText={value => setPassword(value)}
placeholder = "Enter password"  secureTextEntry />
                  </View> 
                  <Modal isVisible={modalVisible} onBackdropPress={closeModal}>
          <View style={styles.modal}>
              <Image source={mark}  style={styles.markStyle}/>
              <View style={styles.innerModal}> 
              
              <Text style={styles.header}>Why do u need my need my details?</Text>
            <Text style={styles.contentText}>Your unique identification number allows MOH to reach the right person when
                they need to give you important health advice about COVID-19.
            </Text>
            <Button title="I SEE. GOT IT!:)" onPress={closeModal} buttonStyle={styles.btnStyle}/>
              </View>
            
          </View>
        </Modal> 
        <View style={styles.btnContainer}>
        <Button title="CONTINUE" onPress={()=>createAccountMethod(firstname,lastname,password)} buttonStyle={styles.buttonStyle}/></View> 
              </ScrollView>
         
        </KeyboardAvoidingView>
    </Animated.View>

      </View>
    );
  
};

createAccountMethod = (firstname,lastname,password) => {
  let obj = {
    firstname: firstname,
    lastname: lastname,
    password: password,
    phoneno: "",
    country:""
  }

  let data= createAccount(obj);

}
export default CreateAccount;

