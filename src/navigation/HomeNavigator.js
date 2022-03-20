import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as ROUTES from '../constants/routeNames';
import {Contacts, ContactDetail} from '../screens';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={ROUTES.CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen
        name={ROUTES.CONTACT_DETAIL}
        component={ContactDetail}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
