import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Container from '../../components/common/container';
import ContactsComponent from '../../components/contacts';

const Contact = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <ContactsComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </Container>
  );
};

export default Contact;
