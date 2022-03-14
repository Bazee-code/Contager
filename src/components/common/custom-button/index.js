import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import styles from '../input/styles';
import colors from '../../../assets/theme/colors';

const CustomButton = ({title, disabled, loading, ...props}) => {
  const [focused, setFocused] = useState(false);
  const [blur, setBlur] = useState(false);

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
    if (focused) {
      return colors.primary;
    }
    if (error) {
      return colors.danger;
    } else {
      return colors.grey;
    }
  };

  return (
    <TouchableOpacity style={styles.inputContainer}>
      {title && <Text>{title}</Text>}
    </TouchableOpacity>
  );
};

export default CustomButton;
