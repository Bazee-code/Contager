import {View, Text} from 'react-native';
import React from 'react';

import styles from './styles';

const Container = ({style, children}) => {
  return <View style={[styles.wrapper, style]}>{children}</View>;
};

export default Container;
