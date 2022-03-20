import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Container from '../../../components/common/container';
import Input from '../../../components/common/input';
import CustomButton from '../../../components/common/custom-button';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import MessageComponent from '../../common/message';
import {LOGIN} from '../../../constants/routeNames';
import Entypo from 'react-native-vector-icons/Entypo';

const RegisterForm = ({
  form,
  errors,
  onChange,
  onSubmit,
  loading,
  data,
  error,
}) => {
  const [value, onChangeText] = useState('');
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const navigate = useNavigation();

  const handleLogin = () => {
    navigate.navigate(LOGIN);
  };

  const showPassword = () => {
    setIsSecureEntry(!isSecureEntry);
  };

  return (
    <ScrollView>
      <Container>
        <View style={styles.loginHeaderSection}>
          <Image
            source={require('../../../assets/images/homeicon2.jpg')}
            style={styles.loginHeaderImage}
          />
          <Text style={styles.loginHeaderTitle}>Welcome to Contager</Text>
          <Text style={styles.loginHeaderSubTitle}>Create a free account </Text>
        </View>
        {error?.error && (
          <MessageComponent
            retry
            danger
            retryFn={() => {
              console.log('retry triggered');
            }}
            onDismiss={() => {}}
            primary
            message={error?.error}
          />
        )}
        <View style={styles.formSection}>
          <Input
            label="Username"
            placeholder="Enter Username"
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
            iconPosition="right"
            error={errors.userName || error?.username?.[0]}
          />

          <Input
            label="First name"
            placeholder="Enter First name"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            iconPosition="right"
            error={errors.firstName || error?.first_name?.[0]}
          />

          <Input
            label="Last name"
            placeholder="Enter Last name"
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
            iconPosition="right"
            error={errors.lastName || error?.last_name?.[0]}
          />

          <Input
            label="Email"
            placeholder="Enter Email"
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
            iconPosition="right"
            error={errors.email || error?.email?.[0]}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={isSecureEntry}
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            icon={
              <TouchableOpacity onPress={showPassword}>
                {isSecureEntry ? (
                  <Entypo
                    name="eye-with-line"
                    size={28}
                    color="#000"
                    style={{paddingRight: 5}}
                  />
                ) : (
                  <Text style={{fontWeight: 'bold', paddingRight: 5}}>
                    Hide
                  </Text>
                )}
              </TouchableOpacity>
            }
            iconPosition="right"
            error={errors.password || error?.password?.[0]}
          />

          <CustomButton
            title="Create Account"
            loading={loading}
            disabled={loading}
            primary
            onPress={onSubmit}
          />
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
