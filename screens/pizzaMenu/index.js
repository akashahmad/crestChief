import React from 'react'
import {View} from 'react-native'
import PizzaMenu from '../../components/pizzaMenus/pizzaMenu'

export default(props)=>{
    let {navigation} = props;
    return(
        <View>
                <PizzaMenu navigation={navigation} />
        </View>
    );
}