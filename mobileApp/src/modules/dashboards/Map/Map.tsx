import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions,Image, ScrollView } from 'react-native';



export default class MapComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <MapView style={styles.mapStyle} />*/}
        <Image style={styles.mapStyle} source={{uri:'https://raw.githubusercontent.com/arimacdev/covid19-srilankan-data/master/Districts/district_heatmap.png'}}/>
        
     
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});