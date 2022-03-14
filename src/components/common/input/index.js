import {View, Text, TextInput} from 'react-native';
import React from 'react';

import styles from './styles';
import colors from '../../../assets/theme/colors';

const Input = ({
  onChangeText,
  style,
  value,
  label,
  icon,
  iconPosition,
  error,
}) => {
  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };

  const getBorderColor = () => {
    if (error) {
      return colors.danger;
    } else {
      return colors.grey;
    }
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {flexDirection: getFlexDirection()},
          {borderColor: getBorderColor()},
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
