import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import Container from '../../../components/common/container';
import Input from '../../../components/common/input';
import CustomButton from '../../../components/common/custom-button';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import MessageComponent from '../../common/message';
import {REGISTER} from '../../../constants/routeNames';

const LoginForm = ({form, errors, onChange, onSubmit, error, loading}) => {
  const navigate = useNavigation();

  const handleRegister = () => {
    navigate.navigate(REGISTER);
  };

  console.log('error', error);

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
        {/* <MessageComponent
          retry
          retryFn={() => {
            console.log('retry triggered');
          }}
          onDismiss={() => {}}
          primary
          message="Invalid credentials"
        />
        <MessageComponent
          danger
          retry
          retryFn={() => {
            console.log('retry triggered');
          }}
          onDismiss={() => {}}
          message="Invalid credentials"
        /> */}
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
          icon={<Text style={{fontWeight: 'bold', paddingRight: 5}}>Show</Text>}
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
