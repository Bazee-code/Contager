import {View, Text, Alert} from 'react-native';
import React from 'react';
import Container from '../../components/common/container';
import Profile from '../Profile';

const Settings = () => {
  const handleLogout = () => {
    console.log('clicked logout button');
    Alert.alert('Logout!', 'Are you sure you want to logout? ', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'OK',
        onPress: () => {},
      },
    ]);
  };
  return (
    <Container>
      <Profile handleLogout={handleLogout} />
    </Container>
  );
};

export default Settings;
