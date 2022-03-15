import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Container from '../../../components/common/container';
import Input from '../../../components/common/input';
import CustomButton from '../../../components/common/custom-button';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const RegisterForm = () => {
  const [value, onChangeText] = useState('');
  const navigate = useNavigation();

  const handleLogin = () => {
    navigate.navigate('Login');
  };

  return (
    <ScrollView>
      <Container>
        {/* <Image /> */}
        <View style={styles.loginHeaderSection}>
          <Image
            source={require('../../../assets/images/homeicon2.jpg')}
            style={styles.loginHeaderImage}
          />
          <Text style={styles.loginHeaderTitle}>Welcome to Contager</Text>
          <Text style={styles.loginHeaderSubTitle}>Create a free account </Text>
        </View>
        <View style={styles.formSection}>
          <Input
            label="Username"
            placeholder="Enter Username"
            // onChangeText={onChangeText}
            // value={value}
            iconPosition="right"
            // error={'This field is required'}
          />

          <Input
            label="First name"
            placeholder="Enter First name"
            // onChangeText={onChangeText}
            // value={value}
            iconPosition="right"
            // error={'This field is required'}
          />

          <Input
            label="Last name"
            placeholder="Enter Last name"
            // onChangeText={onChangeText}
            // value={value}
            iconPosition="right"
            // error={'This field is required'}
          />

          <Input
            label="Email"
            placeholder="Enter Email"
            // onChangeText={onChangeText}
            // value={value}
            iconPosition="right"
            // error={'This field is required'}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            // onChangeText={onChangeText}
            // value={value}
            icon={<Text>HIDE</Text>}
            iconPosition="right"
          />

          <CustomButton title="Create Account" loading disabled primary />
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.infoText}>Already have an account?</Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.infoLink}>Login here</Text>
          </TouchableOpacity>
        </View>
      </Container>
    </ScrollView>
  );
};

export default RegisterForm;
