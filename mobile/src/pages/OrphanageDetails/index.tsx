import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

import image from '../../assets/images/map-marker.png';

export default function OrphanageDetails() {
  return (
    <View style={styles.container}>
      <Image source={image} style={{ marginBottom: 33 }} />
      <Text>Tela de detalhes em desenvolvimento</Text>
    </View>
  );
}
