import * as React from 'react';
import { Text, View } from 'react-native';
import { gStyle } from '../constants';

// components
import ModalHeader from '../components/ModalHeader';

const Profile = () => (
  <View style={gStyle.container}>
    <ModalHeader text="Profile" />

    <View style={gStyle.p24}>
      <Text>profile content</Text>
    </View>
  </View>
);

export default Profile;
