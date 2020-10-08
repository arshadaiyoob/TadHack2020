import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {}
interface State {}

export default class App extends React.Component<Props, State>{
  render(){
    return(
      <View style={styles.container}>
        <Text>Open up App.js to start working on your application.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
