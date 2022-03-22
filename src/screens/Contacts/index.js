import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Container from '../../components/common/container';
import ContactsComponent from '../../components/contacts';
import NetworkLogger from 'react-native-network-logger';

const Contact = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView>
      <Container>
        <ContactsComponent
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <NetworkLogger />
      </Container>
    </ScrollView>
  );
};

export default Contact;
