import React from 'react'
import { ScrollView, StyleSheet, Image, Text, View, Dimensions, TouchableOpacity, StatusBar, ImageBackground } from 'react-native'
import CardImage from '../../assets/images/atm.png'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { buttonText, commonButtonFooter } from '../../assets/styleGuide/style'
import Footer from '../footer/footer'

export default () => {

    const styles = StyleSheet.create({
        container: {
            height: "100%"
        },
        backgroundImageView: {
            height: "35%"
        },
        backImage: {
            width: 20,
            height: 20
        },
        paymentText: {
            color: "#fff",
            fontSize: RFPercentage(3),
            fontWeight: "600",
            fontFamily: 'Biryani-Bold',
        },
        imageAndpaymentView: {
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: "18%"
        },
        paymentView: {
            width: "60%",
        },
        imageView: {
            width: "40%",
            paddingLeft: "5%",
            paddingTop: "1%"
        },
        belowHeading: {
            marginBottom: "50%"
        },
        paymentHeadingBelowBackg: {
            color: "#333333",
            fontSize: RFPercentage(3),
            fontWeight: "700",
            paddingLeft: 20,
            fontFamily: 'Biryani-Bold',
        },
        mainViewofImageTExt: {
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderColor: "#C4C4C4",
            paddingTop: "5%",
            paddingBottom: "5%"
        },
        imageDotCardText: {
            flexDirection: "row",
            paddingLeft: 20,
        },
        dotIamge: {
            marginTop: "12%",
            marginLeft: "9%",
            marginRight: "3%",
        },
        arrowImg: {
            paddingRight: 20
        },
        voucherMainView: {
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderColor: "#C4C4C4",
            paddingTop: "5%",
            paddingBottom: "5%"
        },
        voucherHEading: {
            color: "#333333",
            fontSize: RFPercentage(3),
            fontWeight: "700",
            paddingLeft: 20,
            fontFamily: 'Biryani-Bold',
            paddingTop: "4%"
        },
        voucherTExtWithHeading: {
            color: "#333333",
            fontSize: RFPercentage(2),
            fontWeight: "600",
            paddingLeft: 10,
            fontFamily: 'Biryani-Bold',
        },
        addAvoucherMainView: {
            height: "20%"
        },
        addAvoucherCode: {
            color: "#EB5757",
            fontSize: RFPercentage(2.5),
            fontWeight: "700",
            paddingLeft: 20,
            fontFamily: 'Biryani-Bold',
            paddingTop: "4%"
        },
        buttonView: {
            alignItems: "center",
            marginTop: "10%"
        },
        footerView: {
            position: "absolute",
            height: "100%",
            justifyContent: "flex-end",
            width: "100%"
        }
    })

    return (
        <View style={styles.container}>
            {/* background image sction starts here */}
            <ScrollView>
                <View style={styles.backgroundImageView}>
                    <ImageBackground source={CardImage}
                        style={{ height: parseInt(Dimensions.get('window').height) * 0.35, resizeMode: "cover" }} >
                        {/* backarrow */}
                        <View style={styles.imageAndpaymentView}>
                            <View style={styles.imageView}>
                                <Image source={require("../../assets/images/arrowBack2.png")} style={styles.backImage} />
                            </View>
                            <View style={styles.paymentView}>
                                <Text style={styles.paymentText}>Payment</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                {/* below background */}
                <View style={styles.belowHeading}>
                    <View>
                        <Text style={styles.paymentHeadingBelowBackg}>Payment Methods</Text>
                    </View>
                    {/* card image dot image and arrowImage */}
                    <View style={styles.mainViewofImageTExt}>
                        <View style={styles.imageDotCardText}>
                            <Image source={require("../../assets/images/redCard.png")} style={styles.backImage} />
                            <Image source={require("../../assets/images/dots.png")} style={styles.dotIamge} />
                            <Text>6490</Text>
                        </View>
                        <View style={styles.arrowImg}>
                            <Image source={require("../../assets/images/rightArrow.png")} />
                        </View>
                    </View>
                    {/* 2nd card */}
                    <View style={styles.mainViewofImageTExt}>
                        <View style={styles.imageDotCardText}>
                            <Image source={require("../../assets/images/redCard.png")} style={styles.backImage} />
                            <Image source={require("../../assets/images/dots.png")} style={styles.dotIamge} />
                            <Text>6490</Text>
                        </View>
                        <View style={styles.arrowImg}>
                            <Image source={require("../../assets/images/rightArrow.png")} />
                        </View>
                    </View>
                    {/* voucheer image and heading */}
                    <View >
                        <View>
                            <Text style={styles.voucherHEading}>Voucher</Text>
                        </View>
                        <View style={styles.voucherMainView}>
                            <View style={styles.imageDotCardText}>
                                <Image source={require("../../assets/images/voucher.png")} style={styles.backImage} />
                                <Text style={styles.voucherTExtWithHeading}>Vouchers</Text>
                            </View>
                            <View style={styles.arrowImg}>
                                <Image source={require("../../assets/images/rightArrow.png")} />
                            </View>
                        </View>
                    </View>
                    {/* add a voucheer code text*/}
                    <View style={styles.addAvoucherMainView}>
                        <Text style={styles.addAvoucherCode}>Add Vaucher code</Text>
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableOpacity style={[commonButtonFooter]} onPress={() => {
                            navigation.navigate("HotelMenu")
                        }}>
                            <Text style={[buttonText]}>View Menu</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.footerView}>
                <Footer />
            </View>

        </View>
    );
}