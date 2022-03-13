import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import * as ROUTES from '../constants/routeNames';

const Login = () => {
  return (
    <View>
      <Text>Login screen</Text>
    </View>
  );
};

const Register = () => {
  return (
    <View>
      <Text>Register screen</Text>
    </View>
  );
};

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator initialRouteName={ROUTES.LOGIN}>
      <AuthStack.Screen name={ROUTES.LOGIN} component={Login} />
      <AuthStack.Screen name={ROUTES.REGISTER} component={Register} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
