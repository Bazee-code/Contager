import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './styles';
import colors from '../../../assets/theme/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomButton = ({
  title,
  secondary,
  primary,
  danger,
  disabled,
  loading,
  onPress,
  style,
}) => {
  const getBgColor = () => {
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
      style={[styles.wrapper, {backgroundColor: getBgColor()}, style]}>
      <View style={[styles.loaderSection]}>
        {title && (
          <Text
            style={{
              color: disabled ? 'black' : colors.white,
              paddingLeft: loading ? 5 : 0,
            }}>
            {loading ? 'Please wait...' : title}
          </Text>
        )}
        {loading && <ActivityIndicator color={primary ? '#FFF' : '#000'} />}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
