import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';

const AppNavContainer = () => {
  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}

      <HomeNavigator />
    </NavigationContainer>
  );
};

export default AppNavContainer;
