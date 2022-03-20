import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import AuthNavigator from './AuthNavigator';
import {GlobalContext} from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomTabNavigator from './BottomTabNavigator';

const AppNavContainer = () => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

  const [isAuth, setIsAuth] = useState(isLoggedIn);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');

      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    } catch (e) {}
  };

  useEffect(() => {
    getUser();
  }, [isLoggedIn]);

  console.log('isloggedIn', isLoggedIn);
  return (
    <>
      <NavigationContainer>
        {isAuth ? <BottomTabNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
};

export default AppNavContainer;
