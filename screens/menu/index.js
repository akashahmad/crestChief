import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Menu from '../../components/menu/menu'

export default (props) => {
  let { navigation } = props;

  return (
    <View style={{ height: "100%" }}>  
      <Menu navigation={navigation} /> 
    </View>                            
  );
}