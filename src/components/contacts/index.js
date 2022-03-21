import {View, Text} from 'react-native';
import React from 'react';
import AppModal from '../common/modal';
import CustomButton from '../common/custom-button';

const ContactsComponent = ({modalVisible, setModalVisible}) => {
  return (
    <View>
      <AppModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <CustomButton
        onPress={() => {
          setModalVisible(true);
        }}
        secondary
        title="Show modal"
      />
    </View>
  );
};

export default ContactsComponent;
