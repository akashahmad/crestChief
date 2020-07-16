import React from 'react'
import { Text, View } from 'react-native'
import Cart from '../../components/cart/cart'

export default (props) => {
  let {navigation} = props;
    return (
        <View style={{ height: "100%" }}>
            <Cart navigation={navigation}/>
        </View>
    );
}