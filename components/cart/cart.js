import React from 'react'
import { ScrollView, StyleSheet, Image, Text, View, Dimensions, TouchableOpacity, StatusBar, ImageBackground } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import { listAndPriceView, listText, insidelistMainView, mainListContainer } from '../../assets/styleGuide/style'

export default () => {

    const styles = StyleSheet.create({
        container: {
            height: "100%",
        },
        MainViewHeading: {
            height: "15%"
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
        plusImg: {
            marginTop:"9%",
        },
        orderPlusAddItemView: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 15,
            paddingRight: 15,
            marginTop: "5%"
        },
        imgAndAddItemText: {
            flexDirection: "row"
        },
        orderHeading: {
            color: "#333333",
            fontSize: RFPercentage(3),
            fontWeight: "600"
        },
        addItem: {
            color: "#EB5757",
            paddingLeft: 5,
            fontSize: RFPercentage(2.5),
        },
        pizzaPrice: {
            color: "#4F4F4F",
            paddingLeft: 5,
            fontSize: RFPercentage(2.5),
        },
        viewAndPizzaName: {
            flexDirection: "row"
        },
        belowPaymethod: {
            height: "100%",
            paddingLeft: 18,
            paddingRight: 19,
            marginBottom:"35%"
        },
        circle: {
            width: 20,
            height: 20,
            backgroundColor: "#27AE60",
            borderRadius: 50,
            marginRight: "4%",
            marginTop: "2%",
        },
        number: {
            color: "#fff",
            textAlign: "center"
        },
        paymethodAndImage: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 18,
            paddingRight: 19,
        },
        mainViewOfPaymentMethod: {
            paddingTop: 20,
            paddingBottom: 20,
            backgroundColor: "#F2F2F2"
        },
        payMethodText: {
            color: "#333333",
            fontSize: RFPercentage(3),
            fontWeight: "700"
        },
        uparrowImage: {
            marginTop: "2%"
        },
        fileDotsText: {
            flexDirection: "row",
        },
        dotImage: {
            marginTop: 9,
            marginLeft: 5,
            marginRight: 5
        },
        mainViewOfFile: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 15
        },
        insidetickView: {
            backgroundColor: "#27AE60",
            paddingTop: 5,
            paddingLeft: 4,
            paddingRight: 4,
            paddingBottom: 5,
            borderRadius: 50
        },
        textWithImages: {
            color: "#333333",
            fontSize: RFPercentage(2.2),
            fontFamily: 'Biryani-Bold',
        },
        addNewCardText: {
            color: "#4F4F4F",
            fontSize: RFPercentage(2.2),
            fontFamily: 'Biryani-Bold',
            paddingTop: 15,
        }
    })

    return (
        <View >
            <ScrollView style={styles.container}>
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
                        <Text style={styles.orderHeading}>Your Order</Text>
                    </View>
                    <View style={styles.imgAndAddItemText}>
                        <Image source={require("../../assets/images/plus.png")} style={styles.plusImg} />
                        <Text style={styles.addItem}>Add Items</Text>
                    </View>
                </View>
                {/* pizza and price */}
                <View style={styles.orderPlusAddItemView}>
                    <View style={styles.viewAndPizzaName}>
                        <View style={styles.circle}><Text style={styles.number}>1</Text></View>
                        <Text style={styles.orderHeading}>Pizza Celentano</Text>
                    </View>
                    <View style={styles.imgAndAddItemText}>
                        <Text style={styles.pizzaPrice}>$ 13.98</Text>
                    </View>
                </View>
                {/* lists  */}
                <View style={[mainListContainer]}>
                    <View style={[insidelistMainView]}>
                        <Text style={[listText]}>Add a Note (extra napkins, extra sause...)</Text>
                    </View>
                    {/* 2nd list of data */}
                    <View style={[insidelistMainView]}>
                        <Text style={[listText]}>Add a Promo</Text>
                    </View>
                    {/* 3rd */}
                    <View style={[listAndPriceView]}>
                        <Text style={[listText]}>Subtotal</Text>
                        <Text style={[listText]}>$ 7.99</Text>
                    </View>
                    {/* 4th */}
                    <View style={[listAndPriceView]}>
                        <Text style={[listText]}>Taxes</Text>
                        <Text style={[listText]}>$ 0.99</Text>
                    </View>
                    {/* 5th */}
                    <View style={[listAndPriceView]}>
                        <Text style={[listText]}>Total</Text>
                        <Text style={[listText]}>$ 7.99</Text>
                    </View>
                </View>
                {/* paymethod */}
                <View style={styles.mainViewOfPaymentMethod}>
                    <View style={styles.paymethodAndImage}>
                        <Text style={styles.payMethodText}>Pay Methods</Text>
                        <Image source={require("../../assets/images/upArrow.png")} style={styles.uparrowImage} />
                    </View>
                </View>
                {/* add new card */}
                <View style={styles.belowPaymethod}>
                    <View style={styles.mainViewOfFile}>
                        <View style={styles.fileDotsText}>
                            <Image source={require("../../assets/images/file.png")} />
                            <Image source={require("../../assets/images/dots.png")} style={styles.dotImage} />
                            <Text style={styles.textWithImages}>6490</Text>
                        </View>
                        <View >
                            <View style={styles.insidetickView}>
                                <Image source={require("../../assets/images/tick.png")} />
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.addNewCardText}>Add New Card</Text>
                        <Text style={styles.addNewCardText}>Pay at the place</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}