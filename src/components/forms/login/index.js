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
import Entypo from 'react-native-vector-icons/Entypo';

const LoginForm = ({onChange, onSubmit, error, loading, form, params}) => {
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
        {params?.data && (
          <MessageComponent
            success
            onDismiss={() => {}}
            message={`Account created successfully!`}
          />
        )}
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
          value={form.userName || null}
          iconPosition="right"
        />

        <Input
          label="Password"
          placeholder="Enter password"
          secureTextEntry={isSecureEntry}
          value={form.password || null}
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
                <Text style={{fontWeight: 'bold', paddingRight: 5}}>Hide</Text>
              )}
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
