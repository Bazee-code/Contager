import {View, Text, Modal, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';

const AppModal = ({modalVisible, setModalVisible}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modalView}>
          <ScrollView>
            <Text>I love pussy</Text>
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AppModal;
