import React from 'react';
import MapView from 'react-native-maps';
<<<<<<< HEAD:mobileApp/src/modules/dashboards/Map/Map.tsx
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import BottomNavigator from '../BottomNavigator';
// import BottomNavigator from '../../navigation/TabNavigator';
=======
import { StyleSheet, Text, View, Dimensions,Image, ScrollView } from 'react-native';
import BottomNavigator from './BottomNavigator';
>>>>>>> 671b24f6bcf1a5261015dedc7ab900fa00644150:mobileApp/src/modules/dashboards/Map.tsx

export default class MapComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <MapView style={styles.mapStyle} />*/}
        <Image style={styles.mapStyle} source={{uri:'https://raw.githubusercontent.com/arimacdev/covid19-srilankan-data/master/Districts/district_heatmap.png'}}/>
        
     
        <BottomNavigator isMap/>
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