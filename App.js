/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { StatusBar } from 'react-native'
import AuthHandler from './authHandler'
import SplashScreen from 'react-native-splash-screen'


export default () => {

  useEffect(()=>{
    SplashScreen.hide();
  })

  return (
    <> 
      <StatusBar barStyle="light-content" translucent={true} backgroundColor={'transparent'} />
      {/* Global State Provider will be added here. */}
      <AuthHandler />
    </>
  );
};

