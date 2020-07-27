import React from 'react'
import {View} from 'react-native'
import AddNewPayment from '../../components/addNewPayment/addNewPayment'

export default(props)=>{
    const {navigation}=props
    return(
        <View style={{height:"100%"}}>
            <AddNewPayment navigation={navigation}/>
        </View>
    );
}