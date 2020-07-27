import React from 'react'
import { View } from 'react-native'
import AddAccount from '../../components/addAccountDetails/addAcountDetails'

export default (props) => {
    let { navigation} = props;
    return (
        <View style={{height:"100%"}}>
            <AddAccount navigation={navigation}/>
        </View>
    );
}