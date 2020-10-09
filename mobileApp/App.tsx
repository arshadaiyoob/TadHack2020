import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './src/modules/auth/Landing/Landing'

interface Props {}
interface State {}

export default class App extends React.Component<Props, State>{
  render(){
    return(
      <View style={styles.container}>
        <Landing/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
