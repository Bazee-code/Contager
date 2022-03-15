import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import Container from '../../../components/common/container';
import Input from '../../../components/common/input';
import CustomButton from '../../../components/common/custom-button';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const LoginForm = ({form, errors, onChange, onSubmit}) => {
  const navigate = useNavigation();

  const handleRegister = () => {
    navigate.navigate('Register');
  };

  return (
    <Container>
      <View style={styles.loginHeaderSection}>
        <Image
          source={require('../../../assets/images/homeicon2.jpg')}
          style={styles.loginHeaderImage}
        />
        <Text style={styles.loginHeaderTitle}>Welcome to Contager</Text>
        <Text style={styles.loginHeaderSubTitle}>Please login here</Text>
      </View>
      <View style={styles.formSection}>
        <Input
          label="Username"
          placeholder="Enter Username"
          onChangeText={value => {
            onChange({name: 'userName', value});
          }}
          iconPosition="right"
          error={errors.userName}
        />

        <Input
          label="Password"
          placeholder="Enter password"
          secureTextEntry={true}
          onChangeText={value => {
            onChange({name: 'password', value});
          }}
          icon={<Text>HIDE</Text>}
          iconPosition="right"
          error={errors.password}
        />

        <CustomButton title="Login" primary onPress={onSubmit} />
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.infoText}>Don't have an account?</Text>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.infoLink}>Register here</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default LoginForm;
