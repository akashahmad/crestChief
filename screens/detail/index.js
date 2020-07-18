import React from 'react'
import { View } from 'react-native'
import Detail from '../../components/detail/detail'

export default (props) => {

    let {navigation} = props

    return (
        <View>
            <Detail navigation={navigation}/>
        </View>
    );
}