
import React,{useEffect,useState} from 'react';
import { Text, View,StatusBar,Image,Animated, TouchableOpacity, KeyboardAvoidingView,
  Platform,ScrollView } from 'react-native';
import styles from './settings.styles';
import arrow from '../../../assets/backArrow.png';
import access from '../../../assets/access.png';
import logout from '../../../assets/logout.png';
import { Avatar } from 'react-native-elements';
import BottomModal from '../../component/BottomModal/BottomModal';




const Settings =()=>{
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
     
    <Text style={styles.bckText}>Back</Text>
    <View style={styles.inner}>
    <Text style={styles.topText}>Settings</Text>
    <View style={styles.avatarContainer}>
    <Avatar
            rounded
            size={80}
            title="AA" 
            containerStyle={{backgroundColor:'#c7c7c7'}}
            
           />
    </View>
   
    </View>
  
    </View>
<View style={styles.bottomContainer}>
<View style={styles.cardView}>
<Text style={styles.textStyle}>FULL NAME</Text>
<Text style={styles.textStyle2}>Arshad Aiyoob</Text>

</View>
<View style={[styles.cardView,{borderBottomColor:'#e3e3e3',borderBottomWidth:1}]}>
<Text style={styles.textStyle}>MOBILE</Text>
<Text style={styles.textStyle2}>+94771234567</Text>

</View>
<View style={[styles.cardView,{borderBottomColor:'#e3e3e3',borderBottomWidth:1,flexDirection:'row'}]}>
<Image source={access} style={styles.aImageStyle}/>
<Text style={styles.accessTxt}>GRANT ACCESS</Text>
<Image source={arrow} style={styles.arrImageStyle}/>
</View>

  <TouchableOpacity style={[styles.cardView,{flexDirection:'row'}]} onPress={openModal}>
  <Image source={logout} style={styles.lImageStyle}/>
<Text style={styles.logTxt}>SIGN OUT</Text>
  </TouchableOpacity>
</View>
<BottomModal visibility={modalVisible} title="Are you sure you want to sign out?" primaryTitle="Sign Out" onClose={closeModal}/>
      </View>
    );
  
};

export default Settings;

