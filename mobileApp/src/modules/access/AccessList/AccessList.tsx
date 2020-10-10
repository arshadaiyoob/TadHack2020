
import arrow from '../../../../assets/back.png';
import React, { ReactElement } from 'react';
import { Text, View,StatusBar,Image,Animated, TouchableOpacity, KeyboardAvoidingView,
  Platform,ScrollView, FlatList } from 'react-native';
import styles from './AccessList.styles';
import UserProfile from '../../../component/UserProfile/UserProfile';
import ItemSeparator from '../../../component/ItemSeprator/ItemSeparator';




const AccessList =()=>{
  
  const data=[{
    name:'Arshad Aiyoob',
  },
  {
    name:'Idrees Nafly',
  },
  {
   name: 'Mohammad Izzath',
  },]
  const renderUserProfile = ({item}): ReactElement<View> => (
    <UserProfile
   name={item.name}
    />
  );
  const renderAddChildButton = (): ReactElement<View> => (
    <>
      <ItemSeparator />
      <TouchableOpacity
       
        >
        <Text style={styles.add}>+ Add Access</Text>
      </TouchableOpacity>
    </>
  );
  const renderUserProfileList = (): ReactElement<View> => (
    <FlatList
    data={data}
      renderItem={renderUserProfile}
      ListFooterComponent={renderAddChildButton}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={item => item.name}
    />
  );
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
     
    <Text style={styles.topText}>ACCESS LIST</Text>
    <View/>
    </View>
    <View style={styles.bottomContainer}>
                  <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.bottomContainer}>
          <ScrollView
              style={styles.keyboardAwareContentContainer}
              showsVerticalScrollIndicator={false}>
                <View style={{marginTop:20}}>
                {renderUserProfileList()}
                </View>
                  
                  
                  {/* <View style={styles.btnContainer}>
                  <TouchableOpacity >
                      <Text style={styles.cancelBtn}>Cancel</Text></TouchableOpacity>
        <Button title="GRANT ACCESS"  buttonStyle={styles.buttonStyle}/></View>  */}
              </ScrollView>
         
        </KeyboardAvoidingView>
    </View>

      </View>
    );
  
};

export default AccessList;

