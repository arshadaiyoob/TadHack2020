
import arrow from '../../../../assets/back.png';
import React ,{useState} from 'react';
import { Text, View,StatusBar,Image,TouchableOpacity, KeyboardAvoidingView,
  Platform,ScrollView } from 'react-native';
import styles from './ViewAccess.styles';
import TextField from '../../../component/Textfield/TextField';
import {Avatar, Button} from 'react-native-elements';
import PhoneInput from 'react-native-phone-number-input';
import color from '../../../styles/color';
import BottomModal from '../../../component/BottomModal/BottomModal';




const ViewAccess =()=>{
    const [modalVisible, setModalVisible] = useState(false);
  const closeModal =()=>{
      setModalVisible(false);
  }
  const openModal =()=>{
    setModalVisible(true);
}
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
     
    <Text style={styles.topText}>VIEW ACCESS</Text>
    <View/>
    </View>
    <View style={styles.avatarContainer}>
    <Avatar
            rounded
            size={120}
            title="IN" 
            containerStyle={{backgroundColor:'#c7c7c7'}}
            
           />
    </View>
    
    <View style={styles.bottomContainer}>
                  <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.bottomContainer}>
          <ScrollView
              style={styles.keyboardAwareContentContainer}
              showsVerticalScrollIndicator={false}>
                  <View style={styles.nameWrapper}>
                      <View style={styles.firstNameWrapper}>
                      <Text style={styles.text}>FIRST NAME</Text>
                  <TextField   value="Idrees"  disabled/>
                      </View>
                 <View style={styles.lastNameWrapper}><Text style={styles.text}>LAST NAME</Text>
                  <TextField  value="Nafly"  disabled/></View>
                  
                  </View>
                  <View style={styles.mobileStyle}>
                  <Text style={styles.text}>MOBILE</Text>
                <PhoneInput
            defaultCode="US"
            withDarkTheme
            defaultValue="77 123 4567"
            textContainerStyle={styles.textContainerStyle}
            textInputStyle={styles.textInputStyle}
            disabled={true}
            codeTextStyle={{color:color.font.lightText}}  
            disableArrowIcon={true}
          />
                </View>
                  <View style={styles.btnContainer}>
        <Button title="REMOVE ACCESS"  buttonStyle={styles.buttonStyle} onPress={openModal}/></View> 
              </ScrollView>
         
        </KeyboardAvoidingView>
    </View>
    <BottomModal visibility={modalVisible} title="Are you sure ?" primaryTitle="Remove Access" onClose={closeModal}/>
      </View>
    );
  
};

export default ViewAccess;

