import {View, Text} from 'react-native';
import React, {useContext, useEffect, useCallback} from 'react';
import AppModal from '../common/modal';
import {GlobalContext} from '../../context/Provider';
import getContactAction from '../../context/actions/contact-actions/getContactAction';

const ContactsComponent = ({modalVisible, setModalVisible}) => {
  const {
    contactsDispatch,
    contactsState: {
      getContacts: {data, loading},
    },
  } = useContext(GlobalContext);
  console.log('data', data);

  useEffect(() => {
    getContactAction()(contactsDispatch);
  }, [data]);

  return (
    <View>
      <AppModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default ContactsComponent;
