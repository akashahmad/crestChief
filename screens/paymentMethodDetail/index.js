import React from 'react'
import { View } from "react-native";
import PaymentMethodDetail from '../../components/paymentMethodDetail/paymentMethodDetail'

export default (props) => {
    const {navigation}=props
    return (
        <View style={{height:"100%"}}>
            <PaymentMethodDetail navigation={navigation}/>
        </View>
    );
}