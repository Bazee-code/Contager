import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as ROUTES from '../constants/routeNames';
import {CreateContact} from '../screens';

const CreateContactNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={ROUTES.CREATE_CONTACT}
        component={CreateContact}
      />
    </HomeStack.Navigator>
  );
};

export default CreateContactNavigator;
