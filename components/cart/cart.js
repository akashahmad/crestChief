import React from 'react'
import { ScrollView, StyleSheet, Image, Text, View, Dimensions, TouchableOpacity, StatusBar, ImageBackground } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';

export default () => {

    const styles = StyleSheet.create({
        container: {
            height: "100%"
        },
        MainViewHeading: {
            height: "40%"
        },
        backgroundLinearGradient: {
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20
        },
        yourCartHeading: {
            color: "#FFFFFF",
            fontSize: RFPercentage(3),
            paddingTop: "6%",
            fontWeight: "600"
        },
        plusImg:{
            width:20,
            height:20
        },
    })

    return (
        <View style={StyleSheet.container}>
            {/* your cart heading */}
            <View style={styles.MainViewHeading}>
                <LinearGradient style={styles.backgroundLinearGradient} colors={["#000000", "#424242"]}
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                    <Text style={styles.yourCartHeading}>Your Cart</Text>
                </LinearGradient>
            </View>
            {/* your order +add items*/}
            <View style={styles.orderPlusAddItemView}>
                <View>
                    <Text>Your Order</Text>
                </View>
                <View>
                    <Image source={require("../../assets/images/star.png")} style={styles.plusImg} />
                    <Text>Add Items</Text>
                </View>
            </View>
        </View>
    );
}