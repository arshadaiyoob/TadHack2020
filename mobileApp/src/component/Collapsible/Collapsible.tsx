import a from '@ant-design/react-native/lib/modal/operation';
import React, { Component, useState } from 'react';
import { View, Text, Image } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { Button } from 'react-native-elements';
import pcr from '../../../assets/pcr.png';
import styles from './Collapsible.styles';

interface CustomProps {
  onPress?: () => {};
  pcrLocation: any;
}

const Collapsible: React.FC<CustomProps> = props => {
  const {
    onPress,
    pcrLocation
  } = props;

  const [activeSections, setActiveSections] = useState([]);
console.log(pcrLocation,"sssssffg")
  const SECTIONS = [
    {
      title: 'National Institute of Infections Diseases',
      address: 'colombo',
      longitude: 'ysgfugweusfgue',
      latitude: 'kjhdiuwehiudiw',
    },
    {
      title: 'National Hospital Sri lanka',
      address: 'colombo',
      longitude: 'sdfiuweifhwiuef',
      latitude: 'llljosijkj',
    },
  ];

  const _renderHeader = sections => {
    return (
      <View style={styles.container} >
        <Image style={styles.imgStyle} source={pcr} />
        <Text style={styles.header}>{sections.title}</Text>
      </View>
    );
  };

  const _renderContent = sections => {
    return (
      <View style={styles.collapsedContainer}>
        <View style={styles.collText}>
          <Text style={styles.txt}>ADDRESS: {sections.address}</Text>
          <Text style={styles.txt}>LONGITUDE: {sections.longitude}</Text>
          <Text style={styles.txt}>LATITUDE: {sections.latitude}</Text>
          <View style={styles.btnContainer}>
        <Button title="Navigate"  buttonStyle={styles.buttonStyle} onPress={onPress}/></View> 
        </View>

      </View>
    );
  };

  const _updateSections = activeSections => {
    setActiveSections(activeSections);
  };

console.log(pcrLocation)
  return (
    <Accordion
      sections={SECTIONS}
      activeSections={activeSections}
      renderHeader={_renderHeader}
      renderContent={_renderContent}
      onChange={_updateSections}
    />
  );

}
export default Collapsible;