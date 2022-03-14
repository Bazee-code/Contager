import {View, Text, TextInput} from 'react-native';
import React from 'react';

import styles from './styles';

const Input = ({onChangeText, style, value}) => {
  return (
    <View>
      <TextInput
        style={[styles.textInput, style]}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default Input;
