import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import QRScanner from './screens/qRScanner'
import HotelPopolarDishes from './screens/menu'
import Cart from './screens/cart'
import HotelMenu from './screens/pizzaMenu'
import Detail from './screens/detail'
import Profile from './screens/profile'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
export default () => {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: () => <></>,
          title: " "
        }}
      />
      <Stack.Screen
        name="QRScanner"
        component={QRScanner}
        options={{
          header: () => <></>,
          title: " "
        }}
      />
      <Stack.Screen
        name="HotelPopolarDishes"
        component={HotelPopolarDishes}
        options={{
          header: () => <></>,
          title: " "
        }}
      />
      <Stack.Screen
        name="HotelMenu"
        component={HotelMenu}
        options={{
          header: () => <></>,
          title: " "
        }}
      />
      <Stack.Screen
        name="MenuDetail"
        component={Detail}
        options={{
          header: () => <></>,
          title: " "
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          header: () => <></>,
          title: " "
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
}


