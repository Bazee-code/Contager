import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Container from '../../components/common/container';
import Input from '../../components/common/input';

const Login = () => {
  const [text, onChangeText] = useState('Useless Text');
  const [number, onChangeNumber] = useState(null);

  return (
    <Container>
      <Input
        label="Username"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;
