import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import * as ROUTES from '../constants/routeNames';

const Contacts = () => {
  return (
    <View>
      <Text>Contacts screen</Text>
    </View>
  );
};

const ContactDetail = () => {
  return (
    <View>
      <Text>Contact detail screen</Text>
    </View>
  );
};

const CreateContact = () => {
  return (
    <View>
      <Text>Create contact screen</Text>
    </View>
  );
};

const Settings = () => {
  return (
    <View>
      <Text>Settings screen</Text>
    </View>
  );
};

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
