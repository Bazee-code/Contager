import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import HomeNavigator from './HomeNavigator';
import {GlobalContext} from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppNavContainer = () => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

  const [isAuth, setIsAuth] = useState(false);
  const [authCompleted, setAuthCompleted] = useState(false);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');

      if (user) {
        setAuthDone(true);
        setIsAuth(true);
      } else {
        setIsAuth(false);
        setAuthDone(false);
      }
    } catch (e) {}
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log('isloggedIn', isLoggedIn);
  return (
    <>
      {authCompleted ? (
        <NavigationContainer>
          {isLoggedIn || isAuth ? <HomeNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};

export default AppNavContainer;
