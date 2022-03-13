import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as ROUTES from '../constants/routeNames';
import {Login, Register} from '../screens';

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
