import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as ROUTES from '../constants/routeNames';
import {Settings} from '../screens';

const SettingsNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={ROUTES.SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};

export default SettingsNavigator;
