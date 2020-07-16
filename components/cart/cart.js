import React, { useState } from 'react'
import { ScrollView, StyleSheet, Image, Text, View, Dimensions, TouchableOpacity, StatusBar, ImageBackground } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import { grandTotal, commonButtonFooter, buttonText, listAndPriceView, listText, insidelistMainView, } from '../../assets/styleGuide/style'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import Footer from '../footer/footer'

export default () => {

    const radio_props = [
        { label: 'Through Credit Card', value: 0 },
        { label: 'Cash Payment', value: 1 }
    ];

    const [value, setValue] = useState("");

    const setRadio = (value) => {
        setValue(value);
    }

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
            marginTop: "9%",
        },
        orderPlusAddItemView: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 15,
            paddingRight: 15,
            marginTop: "5%",
        },
        pizzaDeleteOrAdd: {
            borderTopWidth: 1,
            borderColor: "#F2F2F2",
            paddingTop: 20,
            borderBottomWidth: 1,
            paddingBottom: 20,
        },
        imgAndAddItemText: {
            flexDirection: "row"
        },
        orderHeading: {
            color: "#333333",
            fontSize: RFPercentage(2.5),
            fontWeight: "600"
        },
        imgQuantity: {
            flexDirection: "row",
            paddingTop: 4
        },
        addItem: {
            color: "#EB5757",
            paddingLeft: 5,
            fontSize: RFPercentage(2.5),
        },
        pizzaPrice: {
            color: "#4F4F4F",
            paddingLeft: 5,
            paddingTop: 4,
            fontSize: RFPercentage(2.5),
        },
        viewAndPizzaName: {
            flexDirection: "row",
            marginTop: "1%"
        },
        deleteImage: {
            marginTop: "3%",
            marginRight: 10
        },
        belowPaymethod: {
            height: "100%",
            paddingLeft: 18,
            paddingRight: 19,
            marginBottom: "30%"
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
            color: "#4F4F4F",
            textAlign: "center",
            paddingLeft: 8,
            paddingRight: 8,
            fontSize: RFPercentage(2.5),
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
            paddingRight: 4,
            paddingTop: 2
        },
        addNewCardText: {
            color: "#4F4F4F",
            fontSize: RFPercentage(2.2),
            fontFamily: 'Biryani-Bold',
            paddingTop: 15,
        },
        buttonView: {
            alignItems: "center",
            marginTop: "5%"
        },
        footerMainView: {
            position: "absolute",
            bottom: 0,
            justifyContent: "flex-end",
            width: "100%"
        }
    })

    return (
        <View style={styles.container}>
            {/* your cart heading */}
            <View style={styles.MainViewHeading}>
                <LinearGradient style={styles.backgroundLinearGradient} colors={["#000000", "#424242"]}
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                    <Text style={styles.yourCartHeading}>Your Cart</Text>
                </LinearGradient>
            </View>
            <ScrollView >
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
                <View style={[styles.orderPlusAddItemView, styles.pizzaDeleteOrAdd]}>
                    <View style={styles.viewAndPizzaName}>
                        <Image source={require("../../assets/images/delete.png")} style={styles.deleteImage} />
                        <Text style={styles.orderHeading}>Pizza Celentano</Text>
                    </View>
                    <View style={styles.imgQuantity}>
                        <Image source={require("../../assets/images/plusGreen.png")} />
                        <Text style={styles.number}>1</Text>
                        <Image source={require("../../assets/images/minusGreen.png")} />
                    </View>
                    <View style={styles.imgAndAddItemText}>
                        <Text style={styles.pizzaPrice}>$ 13.98</Text>
                    </View>
                </View>

                {/* lists  */}
                <View>
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
                        <Text style={[grandTotal]}>Grand Total</Text>
                        <Text style={[grandTotal]}>$ 7.99</Text>
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
                        <View >
                            <RadioForm
                                radio_props={radio_props}
                                initial={0}
                                buttonColor={'#BDBDBD'}
                                selectedButtonColor={'#F14336'}
                                buttonInnerColor={'#F14336'}
                                animation={true}
                                buttonSize={10}
                                buttonOuterSize={20}
                                onPress={(value) => { setRadio({ value: value }) }}
                        />
                        </View>
                        <View style={styles.fileDotsText}>
                            <Image source={require("../../assets/images/dots.png")} style={styles.dotImage} />
                            <Text style={styles.textWithImages}>6490</Text>
                            <Image source={require("../../assets/images/pen.png")} style={styles.penImage} />
                        </View>
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableOpacity style={[commonButtonFooter]}>
                            <Text style={[buttonText]}>Menu</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.footerMainView}>
                <Footer />
            </View>
        </View>
    );
}