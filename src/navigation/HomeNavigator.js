import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

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
    <HomeStack.Navigator initialRouteName="Contacts">
      <HomeStack.Screen name="Contact" component={Contacts} />
      <HomeStack.Screen name="Contact Detail" component={ContactDetail} />
      <HomeStack.Screen name="CreateContact" component={CreateContact} />
      <HomeStack.Screen name="Settings" component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
