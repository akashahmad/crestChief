import React, { useState } from 'react'
import { Text, View, CheckBox } from 'react-native'
import DiscoverMainPage from '../../components/discoverSpecialOffers/discoverSpecialOffers'

export default () => {

    const [CheckBox,setCheck]=useState()

    return (
        <View style={{height:"100%"}}>
            <DiscoverMainPage />
        </View>
    );
}