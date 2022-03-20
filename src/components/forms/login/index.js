import {View, Text, Image, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import Container from '../../../components/common/container';
import Input from '../../../components/common/input';
import CustomButton from '../../../components/common/custom-button';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import MessageComponent from '../../common/message';
import {REGISTER} from '../../../constants/routeNames';

const LoginForm = ({onChange, onSubmit, error, loading}) => {
  const navigate = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const handleRegister = () => {
    navigate.navigate(REGISTER);
  };

  const showPassword = () => {
    setIsSecureEntry(!isSecureEntry);
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
        {error && (
          <MessageComponent
            danger
            onDismiss={() => {}}
            message={error?.detail}
          />
        )}
        <Input
          label="Username"
          placeholder="Enter Username"
          onChangeText={value => {
            onChange({name: 'userName', value});
          }}
          iconPosition="right"
        />

        <Input
          label="Password"
          placeholder="Enter password"
          secureTextEntry={isSecureEntry}
          onChangeText={value => {
            onChange({name: 'password', value});
          }}
          icon={
            <TouchableOpacity onPress={showPassword}>
              <Text style={{fontWeight: 'bold', paddingRight: 5}}>Show</Text>
            </TouchableOpacity>
          }
          iconPosition="right"
        />

        <CustomButton
          title="Login"
          loading={loading}
          disabled={loading}
          primary
          onPress={onSubmit}
        />
        {loading && <ActivityIndicator color="#FFF" />}
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
