import React from 'react'
import { View } from 'react-native'
import Profile from '../../components/selectPaymentMethod/selectPaymentMethod'

export default (props) => {
    let {navigation} = props;
    return (
        <View style={{height:"100%"}}>
            <Profile navigation={navigation}/>
        </View> 
    );
}