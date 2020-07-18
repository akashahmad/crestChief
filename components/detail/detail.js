import React from 'react'
import { Image, ScrollView, StyleSheet, ImageBackground, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import BackgroundPizzaImg from '../../assets/images/detailPageImage.png'
import { commonButtonFooter, buttonText, } from '../../assets/styleGuide/style'
import LinearGradient from 'react-native-linear-gradient';

export default (props) => {
    let {navigation} = props;

    const styles = StyleSheet.create({
        container: {
            height: "100%"
        },
        backgroundPizzaView: {
            borderRadius: 90
        },
        arrowBackImg: {
            width: 21,
            height: 20,
            marginTop: "1%"
        },
        backImgAndTextView: {
            flexDirection: "row",
            paddingTop: "20%",
            paddingLeft: "5%"
        },
        textStyle: {
            color: "#FFFFFF",
            fontSize: RFPercentage(3),
            fontFamily: 'Biryani-Bold',
            paddingLeft: 15
        },
        viewOfPizzaDiscription: {
            paddingLeft: 15,
            paddingRight: 15
        },
        pizzaHeading: {
            color: "#4F4F4F",
            fontSize: RFPercentage(3),
            fontFamily: 'Biryani-Bold',
            fontWeight: '700',
            paddingTop: 20
        },
        discription: {
            color: "#828282",
            fontSize: RFPercentage(2),
            fontFamily: 'Biryani-Regular',
            // width: 200,
            paddingTop: 10,
            lineHeight: 15
        },
        // radio buttons portion css
        mainViewOfRadioButtons: {
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 20,
            paddingBottom: 20,
            borderTopWidth: 2,
            borderColor: "#E0E0E0",
            // borderBottomWidth: 2,
            marginTop: 15
        },
        sizeAndrequired: {
            flexDirection: "row"
        },
        sizeText: {
            color: "#4F4F4F",
            fontSize: RFPercentage(2.5),
            fontFamily: 'Biryani-Regular',
            fontWeight: "700",
            paddingTop: 3
        },
        requiredView: {
            padding: 7,
            backgroundColor: "#27AE60",
            marginLeft: 20,
            borderRadius: 5
        },
        requiredText: {
            color: "#FFFFFF",
            fontSize: RFPercentage(2),
            fontFamily: 'Biryani-Regular',
        },
        requiredViewSecond: {
            padding: 7,
            backgroundColor: "#F2C94C",
            marginLeft: 20,
            borderRadius: 5
        },
        secondRequiredText: {
            color: "#333333",
            fontSize: RFPercentage(2),
            fontFamily: 'Biryani-Regular',
        },
        radioButtonMainView: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: "7%"
        },
        circlImgText: {
            flexDirection: "row",
            justifyContent: "space-between"
        },
        radiobtnText: {
            color: "#828282",
            fontSize: RFPercentage(2.5),
            fontFamily: 'Biryani-Regular',
            paddingLeft: "4%"
        },
        radioPrice: {
            color: "#828282",
            fontSize: RFPercentage(2.5),
            fontFamily: 'Biryani-Regular'
        },
        radioImg: {
            width: 25,
            height: 25,
        },
        toppingHeadingView: {
            paddingTop: 20,
            paddingBottom: 10,
            borderTopWidth: 2,
            borderColor: "#E0E0E0"
        },
        headingToping: {
            color: "#4F4F4F",
            fontSize: RFPercentage(2.5),
            fontFamily: 'Biryani-Regular',
            paddingLeft: 20,
            paddingRight: 20,
            fontWeight: "700"
        },
        belowCheckBox: {
            paddingLeft: 20,
            paddingRight: 20,
        },
        belowCheckboxText: {
            borderColor: "#E0E0E0",
            paddingBottom: 15,
            borderBottomWidth: 2,
            fontSize: RFPercentage(2.3),
            fontFamily: 'Biryani-Regular',
            color: "#828282",
            paddingTop: 10
        },
        backgroundGradient: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "10%",
            paddingTop: 30,
            paddingBottom: 30,
            paddingRight: 10,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10

        },
        imgAndTextOfCart: {
            flexDirection: "row",
            paddingTop: 10
        },
        buttonView: {
            alignItems: "center",
            width: "65%",
        },
        pluMinusImg: {
            width: 35,
            height: 35,
            marginLeft: 10
        },
        textBetweenImg: {
            fontSize: RFPercentage(3),
            fontFamily: 'Biryani-Regular',
            color: "#FFFFFF",
            paddingTop: 6,
            paddingLeft: 8
        },
        detailButton: {
            backgroundColor: "#F14336",
            width: "100%",
            // padding: 10,
            borderRadius: 10,
            elevation: 2,
        }
    })

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.backgroundPizzaView} >
                    {/* background Image */}
                    <ImageBackground source={BackgroundPizzaImg}
                        style={{ height: parseInt(Dimensions.get('window').height) * 0.28, resizeMode: "cover", borderRadius: 90 }} >
                        <View style={styles.backImgAndTextView}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image source={require("../../assets/images/arrowBack2.png")} style={styles.arrowBackImg} />
                            </TouchableOpacity>
                            <Text style={styles.textStyle}>Celentano Restaurant</Text>
                        </View>
                    </ImageBackground>
                    {/* pizza name heading and discription */}
                    <View style={styles.viewOfPizzaDiscription}>
                        <View>
                            <Text style={styles.pizzaHeading}>Pizza Celentano</Text>
                        </View>
                        <View>
                            <Text style={styles.discription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                        </View>
                    </View>
                    {/* radio buttons first sction */}
                    <View style={styles.mainViewOfRadioButtons}>
                        <View style={styles.sizeAndrequired}>
                            {/* size and required  */}
                            <View>
                                <Text style={styles.sizeText}>Size</Text>
                            </View>
                            <View style={styles.requiredView}>
                                <Text style={styles.requiredText}>Required</Text>
                            </View>
                        </View>
                        {/* first radio button */}
                        <View style={styles.radioButtonMainView}>
                            <TouchableOpacity>
                                <View style={styles.circlImgText}>
                                    <Image source={require("../../assets/images/circle2.png")} style={styles.radioImg} />
                                    <Text style={styles.radiobtnText}>10’’ Small</Text>
                                </View>
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.radioPrice}>$ 10.99</Text>
                            </View>
                        </View>
                        {/* 2nd radio button */}
                        <View style={styles.radioButtonMainView}>
                            <TouchableOpacity>
                                <View style={styles.circlImgText}>
                                    <Image source={require("../../assets/images/circle2.png")} style={styles.radioImg} />
                                    <Text style={styles.radiobtnText}>12’’ Medium</Text>
                                </View>
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.radioPrice}>$ 10.99</Text>
                            </View>
                        </View>
                        {/* 3rd radio button */}
                        <View style={styles.radioButtonMainView}>
                            <TouchableOpacity>
                                <View style={styles.circlImgText}>
                                    <Image source={require("../../assets/images/circle2.png")} style={styles.radioImg} />
                                    <Text style={styles.radiobtnText}>14’’ Large</Text>
                                </View>
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.radioPrice}>$ 10.99</Text>
                            </View>
                        </View>
                    </View>
                    {/* radio buttons Second sction */}
                    <View style={styles.mainViewOfRadioButtons}>
                        <View style={styles.sizeAndrequired}>
                            {/* size and required  */}
                            <View>
                                <Text style={styles.sizeText}>Size</Text>
                            </View>
                            <View style={styles.requiredViewSecond}>
                                <Text style={styles.secondRequiredText}>Required</Text>
                            </View>
                        </View>
                        {/* first radio button */}
                        <View style={styles.radioButtonMainView}>
                            <TouchableOpacity>
                                <View style={styles.circlImgText}>
                                    <Image source={require("../../assets/images/circle2.png")} style={styles.radioImg} />
                                    <Text style={styles.radiobtnText}>Traditional</Text>
                                </View>
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.radioPrice}>$ 10.99</Text>
                            </View>
                        </View>
                        {/* 2nd radio button */}
                        <View style={styles.radioButtonMainView}>
                            <TouchableOpacity>
                                <View style={styles.circlImgText}>
                                    <Image source={require("../../assets/images/circle2.png")} style={styles.radioImg} />
                                    <Text style={styles.radiobtnText}>Alfredo</Text>
                                </View>
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.radioPrice}>$ 10.99</Text>
                            </View>
                        </View>
                        {/* 3rd radio button */}
                        <View style={styles.radioButtonMainView}>
                            <TouchableOpacity>
                                <View style={styles.circlImgText}>
                                    <Image source={require("../../assets/images/circle2.png")} style={styles.radioImg} />
                                    <Text style={styles.radiobtnText}>BBQ Sauce</Text>
                                </View>
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.radioPrice}>$ 10.99</Text>
                            </View>
                        </View>
                    </View>
                    {/* topping heading */}
                    <View style={styles.toppingHeadingView}>
                        <Text style={styles.headingToping}>Toppings</Text>
                    </View>
                    {/* checkboxes section */}
                    <View style={styles.mainViewOfRadioButtons}>
                        {/* first checkbox button */}
                        <View style={styles.radioButtonMainView}>
                            <TouchableOpacity>
                                <View style={styles.circlImgText}>
                                    <Image source={require("../../assets/images/checkBox.png")} style={styles.radioImg} />
                                    <Text style={styles.radiobtnText}>Traditional</Text>
                                </View>
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.radioPrice}>$2.00</Text>
                            </View>
                        </View>
                        {/* 2nd checkbox button */}
                        <View style={styles.radioButtonMainView}>
                            <TouchableOpacity>
                                <View style={styles.circlImgText}>
                                    <Image source={require("../../assets/images/checkBox.png")} style={styles.radioImg} />
                                    <Text style={styles.radiobtnText}>Alfredo</Text>
                                </View>
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.radioPrice}>$2.00</Text>
                            </View>
                        </View>
                        {/* 3rd checkbox button */}
                        <View style={styles.radioButtonMainView}>
                            <TouchableOpacity>
                                <View style={styles.circlImgText}>
                                    <Image source={require("../../assets/images/checkBox.png")} style={styles.radioImg} />
                                    <Text style={styles.radiobtnText}>BBQ Sauce</Text>
                                </View>
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.radioPrice}>$2.00</Text>
                            </View>
                        </View>
                    </View>
                    {/* below checkbox text */}
                    <View style={styles.belowCheckBox}>
                        <Text style={styles.belowCheckboxText}>Add a note (extra sauce, no onions, etc.)</Text>
                    </View>
                    <View>
                        <LinearGradient style={styles.backgroundGradient} colors={["#424242", "#000000"]}
                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                            <View style={styles.imgAndTextOfCart}>
                                <View>
                                    <Image source={require("../../assets/images/plusTransparent.png")} style={styles.pluMinusImg} />
                                </View>
                                <View>
                                    <Text style={styles.textBetweenImg}>1</Text>
                                </View>
                                <View>
                                    <Image source={require("../../assets/images/neggativeTransparent.png")} style={styles.pluMinusImg} />
                                </View>
                            </View>
                            <View style={styles.buttonView}>
                                <TouchableOpacity style={styles.detailButton}
                                    onPress={() => {
                                        navigation.navigate("HotelMenu")
                                    }}>
                                    <Text style={[buttonText]}>ADD TO CART $ 13.98</Text>
                                </TouchableOpacity>
                            </View>
                        </LinearGradient>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}