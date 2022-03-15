import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import Container from '../../../components/common/container';
import Input from '../../../components/common/input';
import CustomButton from '../../../components/common/custom-button';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const LoginForm = () => {
  const [value, onChangeText] = useState('');
  const navigate = useNavigation();

  const handleRegsiter = () => {
    navigate.navigate('Register');
  };

  return (
    <Container>
      {/* <Image /> */}
      <View style={styles.loginHeaderSection}>
        <Text style={styles.loginHeaderImage}>Logo here</Text>
        <Text style={styles.loginHeaderTitle}>Welcome to Contager</Text>
        <Text style={styles.loginHeaderSubTitle}>Please login here</Text>
      </View>
      <View style={styles.formSection}>
        <Input
          label="Username"
          // onChangeText={onChangeText}
          // value={value}
          iconPosition="right"
          // error={'This field is required'}
        />

        <Input
          label="Password"
          secureTextEntry={true}
          // onChangeText={onChangeText}
          // value={value}
          icon={<Text>HIDE</Text>}
          iconPosition="right"
        />

        <CustomButton title="Login" loading disabled primary />
      </View>
      <View>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={handleRegsiter}>
          <Text>Register here</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default LoginForm;
