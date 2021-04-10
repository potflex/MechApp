import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, View } from 'react-native';
import { colors, device, fonts, gStyle } from '../constants';
import TouchIcon from '../components/TouchIcon';

import WhereTo from '../components/WhereTo';
import SvgMenu from '../components/icons/Svg.Menu';

import SlideShow from '../components/SlideShow';

const ModalHelp = ({ navigation }) => (
  <View style={gStyle.container}>
    <View style={styles.header}>
      <TouchIcon
        icon={<SvgMenu />}
        iconSize={32}
        onPress={() => navigation.toggleDrawer('ModalHelp')}
        
      /></View>


    <View style={gStyle.p8}>
    
      <SlideShow navigation={navigation} />
    </View>
    <View style={gStyle.p24}>
      <WhereTo navigation={navigation} />
    </View>
  </View>
);

ModalHelp.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({

  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: device.iPhoneX ? 58 : 34
  },

  container: {
    backgroundColor: '#cbcbcc'
  }

});

export default ModalHelp;
