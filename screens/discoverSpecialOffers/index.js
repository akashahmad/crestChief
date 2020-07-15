import React, { useState } from 'react'
import { Text, View, CheckBox } from 'react-native'
import Carousal from '../../components/discoverSpecialOffers/discoverSpecialOffers'

export default () => {

    const [CheckBox,setCheck]=useState()

    return (
        <View style={{height:"100%"}}>
            <Carousal />
        </View>
    );
}