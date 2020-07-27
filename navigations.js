import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import QRScanner from './screens/qRScanner'
import HotelPopolarDishes from './screens/menu'
import Cart from './screens/cart'
import HotelMenu from './screens/pizzaMenu'
import Detail from './screens/detail'
import SelectProfile from './screens/selectPaymentMethod'
import AddNewPayment from './screens/addNewPayment'
import PaymentMethodDetail from './screens/paymentMethodDetail'
import AddAcountDetails from './screens/addAccountDetails'
import { NavigationContainer } from '@react-navigation/native';
import Profile from './screens/profile'
import PaymentMethodOptions from './screens/paymentMethodOptions'

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
        name="PaymentOptions"
        component={PaymentMethodOptions}
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
        name="QRScanner"
        component={QRScanner}
        options={{
          header: () => <></>,
          title: " "
        }}
      />
      
      
      <Stack.Screen
        name="AccountDetails"
        component={AddAcountDetails}
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
        name="SelectPaymentMethod"
        component={SelectProfile}
        options={{
          header: () => <></>,
          title: " "
        }}
      />
      <Stack.Screen
        name="PaymentMethodDetail"
        component={PaymentMethodDetail}
        options={{
          header: () => <></>,
          title: " "
        }}
      />

      <Stack.Screen
        name="AddNewPayment"
        component={AddNewPayment}
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


