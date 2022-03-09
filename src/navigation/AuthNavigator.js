import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

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
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
