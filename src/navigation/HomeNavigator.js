import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as ROUTES from '../constants/routeNames';
import {Contacts, ContactDetail, CreateContact, Settings} from '../screens';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName={ROUTES.CONTACT_LIST}>
      <HomeStack.Screen name={ROUTES.CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen
        name={ROUTES.CONTACT_DETAIL}
        component={ContactDetail}
      />
      <HomeStack.Screen
        name={ROUTES.CREATE_CONTACT}
        component={CreateContact}
      />
      <HomeStack.Screen name={ROUTES.SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
