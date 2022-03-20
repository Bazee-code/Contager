import {Alert} from 'react-native';
import React, {useContext} from 'react';
import Container from '../../components/common/container';
import Profile from '../Profile';
import {GlobalContext} from '../../context/Provider';
import logoutAction from '../../context/actions/auth-actions/logOutAction';

const Settings = () => {
  const {authDispatch} = useContext(GlobalContext);

  const handleLogout = () => {
    Alert.alert('Logout!', 'Are you sure you want to logout? ', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'OK',
        onPress: () => {
          logoutAction()(authDispatch);
        },
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
