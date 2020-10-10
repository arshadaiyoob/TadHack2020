import React from 'react';
import { Text, View, TouchableOpacity,Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import arrow from '../../../assets/backArrow.png';
import styles from './UserProfile.styles';

interface UserProfileComponentProps {
    user?:any;
    name:String,
    onPress?: ()=>void;
  }
  
  const UserProfile: React.FC<UserProfileComponentProps> = ({
  user,
  name,
    onPress,
  }) => {

  
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.avatarWrapper}>
          <Avatar rounded  size="large" title={name.substring(0,1).toUpperCase()} containerStyle={{backgroundColor:'#c7c7c7'}} />
        </View>
        <View style={styles.contentWrapper}>
          <View style={styles.nameWrapper}>
    <Text style={styles.name}>{name}</Text>
    <Image source={arrow} style={styles.arrImageStyle}/>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  
  export default UserProfile;