import React, { useState } from 'react'
import { Text, View, CheckBox } from 'react-native'
import DiscoverMainPage from '../../components/discoverSpecialOffers/discoverSpecialOffers'

export default (props) => {
  let {setLoggedIn} =props;
    return (
        <View style={{height:"100%"}}>
            <DiscoverMainPage setLoggedIn={setLoggedIn} />
        </View>
    );
}