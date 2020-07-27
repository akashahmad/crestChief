import React from 'react'
import {View} from 'react-native'
import PaymentMethod from '../../components/paymentMethodOptions/paymentMethodOptions'

export default(props)=>{
    const {navigation}=props
    return(
        <View style={{height:"100%"}}>
            <PaymentMethod navigation={navigation}/>
        </View>
    );
}