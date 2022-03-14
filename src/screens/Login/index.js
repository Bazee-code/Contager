import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Container from '../../components/common/container';
import Input from '../../components/common/input';

const Login = () => {
  const [value, onChangeText] = useState('');

  return (
    <Container>
      <Input
        label="Username"
        onChangeText={onChangeText}
        value={value}
        iconPosition="right"
        error={'This field is required'}
      />

      <Input
        label="Password"
        onChangeText={onChangeText}
        value={value}
        icon={<Text>HIDE</Text>}
        iconPosition="right"
      />
    </Container>
  );
};

export default Login;
