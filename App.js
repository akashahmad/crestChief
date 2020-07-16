/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Page from './screens/menu/index'
import { StatusBar } from 'react-native'

export default () => {
  return (
    <>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor={'transparent'} />
      <Page />
    </>
  );
};

