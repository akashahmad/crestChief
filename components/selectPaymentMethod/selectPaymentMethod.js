import React from 'react'
import { TextInput, Image, ScrollView, StyleSheet, ImageBackground, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import { sameheaderDiffText } from '../../assets/styleGuide/style'
import Footer from '../footer/footer'

export default () => {

    const styles = StyleSheet.create({
        container: {
            height: "100%"
        },
        linearGradient: {
            height: "16%"
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
            marginTop: "2%"
        },
        paymentImgs: {
            width: 22,
            height: 20,
            marginTop: "2%",
            borderRadius: 5
        },
        headerImgText: {
            flexDirection: "row",
            marginTop: "4%",
            paddingLeft: "5%"
        },
        paymentMainView: {
            marginTop: "10%",
        },
        paymentClickView: {
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
        },
        paymentClickViewBorder: {
            borderTopWidth: 2,
            borderColor: "#E0E0E0",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20
        },
        imgTextPayment: {
            flexDirection: "row",
        },
        paymentText: {
            paddingLeft: "5%",
            color: "#4F4F4F",
            fontSize: RFPercentage(2.5),
            fontFamily: 'Biryani-Bold',
        },
        footerView: {
            position: "absolute",
            bottom: 0,
            justifyContent: "flex-end",
            width: "100%"
        }
    })

    return (
        <View style={styles.container}>
            {/* header linear gradient */}
            <View style={{ height: "100%" }}>
                <View style={styles.linearGradient}>
                    <LinearGradient style={styles.backgrGradient} colors={["#000000", "#424242"]}
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                        <View style={styles.headerImgText}>
                            <Image source={require("../../assets/images/arrowBack2.png")} style={styles.backImg} />
                            <Text style={[sameheaderDiffText]}>Select Payment Method</Text>
                        </View>
                    </LinearGradient>
                </View>
                {/* Payment options */}
                <View style={styles.paymentMainView}>
                    <View>
                        {/* credit card option */}
                        <TouchableOpacity style={styles.paymentClickView}>
                            <View style={styles.imgTextPayment}>
                                <Image source={require("../../assets/images/creditCard.png")} style={styles.paymentImgs} />
                                <Text style={styles.paymentText}>Credit or Debit Card</Text>
                            </View>
                            <View>
                                <Image source={require("../../assets/images/rightArrow.png")} style={styles.rightArrowImg} />
                            </View>
                        </TouchableOpacity>
                        {/* paypal */}
                        <TouchableOpacity style={styles.paymentClickViewBorder}>
                            <View style={styles.imgTextPayment}>
                                <Image source={require("../../assets/images/paypal.png")} style={styles.paymentImgs} />
                                <Text style={styles.paymentText}>PayPal</Text>
                            </View>
                            <View>
                                <Image source={require("../../assets/images/rightArrow.png")} style={styles.rightArrowImg} />
                            </View>
                        </TouchableOpacity>
                        {/* gift card */}
                        <TouchableOpacity style={styles.paymentClickViewBorder}>
                            <View style={styles.imgTextPayment}>
                                <Image source={require("../../assets/images/giftcard.png")} style={styles.paymentImgs} />
                                <Text style={styles.paymentText}>Gift Card</Text>
                            </View>
                            <View>
                                <Image source={require("../../assets/images/rightArrow.png")} style={styles.rightArrowImg} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.footerView}>
                    <Footer currentScreen={"profile"}/>
                </View>
            </View>
        </View>
    );
}