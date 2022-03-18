import {View, Text, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import colors from '../../../assets/theme/colors';
import {color} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';

const MessageComponent = ({
  message,
  secondary,
  primary,
  danger,
  success,
  style,
}) => {
  const getBgColor = () => {
    if (primary) {
      return colors.primary;
    }
    if (success) {
      return colors.success;
    }
    if (danger) {
      return colors.danger;
    }
    if (secondary) {
      return colors.secondary;
    }
  };

  return (
    <TouchableOpacity style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
      <View style={[styles.loaderSection]}>
        {message && (
          <Text
            style={{
              color: '#FFF',
            }}>
            {message}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MessageComponent;
