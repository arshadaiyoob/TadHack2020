import React from 'react';
import { Text, View, TouchableOpacity,Image } from 'react-native';
import img from '../../../assets/img.png'
import color from '../../styles/color';
import styles from './NewsCard.styles';

interface UserProfileComponentProps {
    user?:any;
    name?:String,
    onPress?: ()=>void;
  }
  
  const UserProfile: React.FC<UserProfileComponentProps> = ({
  user,
  name,
    onPress,
  }) => {

  
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={{flex:1,flexDirection:'row',margin:10}}>
            <View>
<Image style={{width:150,height:180,borderRadius:12}} source={img}/>
            </View>
            <View style={{ marginLeft:10,flex:1}}>
                <Text style={{fontSize:16,fontWeight:'600'}}>Broadway Extends shutdown Through May!</Text>
                <Text style={{color:color.font.lightText,marginTop:10}}>Mark Kennedy</Text>
                <Text style={{color:color.font.gray,marginTop:10,fontSize:16}} numberOfLines={5} ellipsizeMode='tail'>bjkalsdbakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</Text>


            </View>

        </View>
      </TouchableOpacity>
    );
  };
  
  export default UserProfile;