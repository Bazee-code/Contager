import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
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
  onPress,
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
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.wrapper,
        {
          backgroundColor: getBorderColor(),
        },
      ]}
      {...props}>
      <View style={styles.loaderSection}>
        {title && (
          <Text
            style={{
              color: disabled ? '#000' : color.white,
              paddingRight: loading ? 10 : 0,
            }}>
            {title}
          </Text>
        )}
        {loading && <ActivityIndicator />}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
