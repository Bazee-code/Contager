import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../../components/common/custom-button';

const Profile = ({handleLogout}) => {
  return (
    <View>
      <Text>Profile component here</Text>
      <CustomButton title="Logout" danger onPress={handleLogout} />
    </View>
  );
};

export default Profile;
