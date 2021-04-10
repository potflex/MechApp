import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { colors, device, fonts, func, gStyle, images } from '../constants';
import PropTypes from 'prop-types';
import TouchIcon from '../components/TouchIcon';
import SvgClose from './icons/Svg.Close';

// icons
import SvgTruck from './icons/Svg.Truck';

const WhereTo = ({ navigation, style, text }) => (
  <View style={styles.container}>
    <View style={styles.containerBanner}>
      <Text style={styles.bannerText}>Wallet</Text>
      <Text style={styles.bannerMuted}>$200</Text>
    </View>

    <View style={styles.containerInput}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', }}>

        <TouchableOpacity
          activeOpacity={gStyle.activeOpacity}
          hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
          onPress={() => navigation.navigate('Home')}
          style={styles.bannerNav}>
          <Image source={images.location} style={styles.iconBottom1} />

          <Text style={styles.bannersText}>Order</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={gStyle.activeOpacity}
          hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
          onPress={() => navigation.navigate('Shop')}
          style={styles.bannerNav}>
          <Image source={images.market} style={styles.iconBottom} />

          <Text style={styles.bannersText}>Shop</Text>
        </TouchableOpacity>



      </View>




      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>

        <TouchableOpacity
          activeOpacity={gStyle.activeOpacity}
          hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
          onPress={() => navigation.navigate('ModalHelp')}
          style={styles.bannerNav}>
          <Image source={images.sos} style={styles.iconBottom1} />
          <Text style={styles.bannersText}>SOS</Text>
        </TouchableOpacity>




        <TouchableOpacity
          activeOpacity={gStyle.activeOpacity}
          hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
          onPress={() => navigation.navigate('Profile')}
          style={styles.bannerNav}>
          <Image source={images.user} style={styles.iconBottom} />
          <Text style={styles.bannersText}>Profile</Text>
        </TouchableOpacity>




      </View>



    </View>
  </View>
);

WhereTo.defaultProps = {
  style: {},
  text: null
};

WhereTo.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,

  // optional
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ]),
  text: PropTypes.string
};


const styles = StyleSheet.create({
  container: {
    borderColor: 'steelblue',
    borderRadius: 1,
    alignSelf: 'center',
    position: 'absolute',
    shadowColor: colors.black,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    paddingTop: device.iPhoneX ? 48 : 24,
    width: device.width - 40,
    height: device.height - 20
  },

  containerBanner: {
    backgroundColor: 'steelblue',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8
  },

  bannerText: {
    color: colors.white,
    fontFamily: fonts.uberMedium,
    fontSize: 15
  },

  bannerNav: {
    width: 100,
    height: 100,
    alignItems: 'center',
    backgroundColor: 'steelblue',
    borderRadius: 10,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },

  bannersText: {
    color: 'white',
    fontFamily: fonts.uberRegular,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10
  },
  bannerMuted: {
    color: colors.mint,
    fontFamily: fonts.uberMedium,
    fontSize: 12
  },
  containerInput: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 40,
    backgroundColor: colors.white,
    flexDirection: 'column',
    height: device.height - 300
  },
  containerSquare: {
    alignItems: 'center',
    flex: 2
  },
  square: {
    backgroundColor: colors.black,
    height: 8,
    width: 8
  },
  text: {
    color: colors.greyAbbey,
    flex: 8,
    fontFamily: fonts.uberMedium,
    fontSize: 20
  },
  containerIcon: {
    alignItems: 'center',

    flex: 2,
    width: 40,
    height: 40,
    justifyContent: 'center'

  },

  iconBottom: {
    height: 30,
    width: 30,
    marginBottom: 10
  },
  iconBottom1:{
    height: 40,
    width: 40,
    marginBottom: 10
  }
});

export default WhereTo;
