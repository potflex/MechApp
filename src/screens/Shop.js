import * as React from 'react';
import { Text, View } from 'react-native';
import { gStyle } from '../constants';

// components
import ModalHeader from '../components/ModalHeader';

const Shop = () => (
  <View style={gStyle.container}>
    <ModalHeader text="Shop" />

    <View style={gStyle.p24}>
      <Text>Shop content</Text>
    </View>
  </View>
);

export default Shop;
