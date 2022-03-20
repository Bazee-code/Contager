import {View, Text, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import colors from '../../../assets/theme/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const MessageComponent = ({
  message,
  secondary,
  primary,
  danger,
  success,
  retry,
  retryFn,
  onDismiss,
}) => {
  const [dismiss, setDismiss] = useState(false);
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
    <>
      {dismiss ? null : (
        <TouchableOpacity
          style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
          <View style={[styles.loaderSection]}>
            {message && (
              <Text
                style={{
                  color: '#FFF',
                }}>
                {message}
              </Text>
            )}
            {retry && (
              <TouchableOpacity onPress={retryFn}>
                <Text
                  style={{
                    color: '#FFF',
                  }}>
                  Retry
                </Text>
              </TouchableOpacity>
            )}
            {typeof onDismiss === 'function' && (
              <TouchableOpacity
                onPress={() => {
                  setDismiss(true);
                  onDismiss();
                }}>
                <Text
                  style={{
                    color: '#FFF',
                  }}>
                  X
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default MessageComponent;
