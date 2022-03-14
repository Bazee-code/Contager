import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import styles from './styles';
import colors from '../../../assets/theme/colors';
import {color} from 'react-native-reanimated';

const CustomButton = ({
  title,
  secondary,
  primary,
  danger,
  disabled,
  loading,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const [blur, setBlur] = useState(false);

  const getBorderColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) {
      return colors.primary;
    }
    if (danger) {
      return colors.danger;
    }
    if (secondary) {
      return colors.secondary;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.wrapper,
        {
          backgroundColor: getBorderColor(),
        },
      ]}
      {...props}>
      {title && (
        <Text style={{color: disabled ? '#000' : color.white}}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
