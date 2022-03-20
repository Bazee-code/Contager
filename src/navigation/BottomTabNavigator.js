import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CONTACT_LIST, CREATE_CONTACT, SETTINGS} from '../constants/routeNames';
import HomeNavigator from './HomeNavigator';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreateContactNavigator from './CreateContactNavigator';
import SettingsNavigator from './SettingsNavigator';
import colors from '../assets/theme/colors';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={CONTACT_LIST}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
      }}>
      <BottomTab.Screen
        name={CONTACT_LIST}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo
              name="home"
              size={30}
              style={{marginBottom: -3}}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={CREATE_CONTACT}
        component={CreateContactNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign
              name="pluscircleo"
              size={30}
              style={{marginBottom: -3}}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={SETTINGS}
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons
              name="ios-settings"
              size={30}
              style={{marginBottom: -3}}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
