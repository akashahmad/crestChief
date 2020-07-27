import React from 'react'
import { TextInput, Image, ScrollView, StyleSheet, ImageBackground, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import {  sameheaderDiffText, buttonText, commonButtonFooter } from '../../assets/styleGuide/style'
import Footer from '../footer/footer'

export default (props) => {
    const {navigation}=props

    const styles = StyleSheet.create({
        container: {
            height: "100%"
        },
        linearGradient: {
            height: "20%"
        },
        backgrGradient: {
            height: "100%",
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            justifyContent: "center"
        },
        backImg: {
            width: 18,
            height: 18,
            marginTop: "1%"
        },
        headerImgText: {
            flexDirection: "row",
            marginTop: "4%",
            paddingLeft: "5%"
        },
        minViewOfForm: {
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: "4%"
        },
        mainViewOfTextInput: {
            marginTop: "8%"
        },
        mainViewOfExpAndCvv: {
            marginTop: "6%",
            flexDirection: "row",
            justifyContent: "space-between",
        },
        inputText: {
            color: "#828282",
            fontSize: RFPercentage(2.5),
            fontFamily: 'Biryani-Bold',
        },
        allInputs: {
            height: 50,
            borderColor: '#E0E0E0',
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
            marginTop: 10
        },
        halfInputs: {
            width: "45%",
        },
        mainButtonView: {
            marginTop:"20%",
            marginBottom: "20%",
            justifyContent:"flex-end"
        },
        buttonView: {
            alignItems: "center",
            width: "100%",
            marginBottom:"4%"
        },
        footerView:{
            justifyContent:"flex-end"
        }
    })

    return (
        <View style={styles.container}>
            {/* header linear gradient */}
            <ScrollView>
                <View style={styles.linearGradient}>
                    <LinearGradient style={styles.backgrGradient} colors={["#000000", "#424242"]}
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                        <View style={styles.headerImgText}>
                            <TouchableOpacity onPress={() => {
                            navigation.navigate("SelectPaymentMethod")
                        }}>
                            <Image source={require("../../assets/images/arrowBack2.png")} style={styles.backImg} />
                            <Text style={[sameheaderDiffText]}>Add Newn Payment Method</Text></TouchableOpacity>
                        </View>
                    </LinearGradient>
                </View>
                {/* add new payment */}
                <View style={styles.minViewOfForm}>
                    {/* card Number */}
                    <View style={styles.mainViewOfTextInput}>
                        <Text style={styles.inputText}>Card Number</Text>
                        <TextInput style={styles.allInputs}
                            placeholder="xxxx  xxxx  xxxx  xxxx" />
                    </View>
                    {/* Card Holder Name */}
                    <View style={styles.mainViewOfTextInput}>
                        <Text style={styles.inputText}>Card Holder Name</Text>
                        <TextInput style={styles.allInputs}
                            placeholder="" />
                    </View>
                    {/* exp and cvv */}
                    <View style={styles.mainViewOfExpAndCvv}>
                        {/* exp */}
                        <View style={styles.halfInputs}>
                            <Text style={styles.inputText}>Exp.Date</Text>
                            <TextInput style={styles.allInputs}
                                placeholder="MM/YY" />
                        </View>
                        {/* cvv */}
                        <View style={styles.halfInputs}>
                            <Text style={styles.inputText}>CVV</Text>
                            <TextInput style={styles.allInputs}
                                placeholder="- - -" />
                        </View>
                    </View>
                    {/* buttons */}
                    <View style={styles.mainButtonView}>
                        <View style={styles.buttonView}>
                            <TouchableOpacity
                                style={[commonButtonFooter]}
                                onPress={() => {
                                    navigation.navigate("PaymentOptions")
                                }}>

                                <Text style={[buttonText]}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.footerView}>
                <Footer navigation={navigation}/>
            </View>
        </View>
    );
}