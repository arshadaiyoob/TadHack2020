import React, { ReactElement } from 'react';
import { View } from 'react-native';
import styles from './ItemSeparator.styles';

const ItemSeparator = (): ReactElement<View> => (
  <View style={styles.itemSeparatorWrapper}>
    <View style={styles.itemSeparator} />
  </View>);

export default ItemSeparator;