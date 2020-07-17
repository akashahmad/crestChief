import React from 'react'
import { Image, ScrollView, StyleSheet, ImageBackground, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import BackgroundPizzaImg from '../../assets/images/detailPageImage.png'
import { pizzaName, discription } from '../../assets/styleGuide/style'

export default () => {

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
            marginTop: "2%"
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
        mainViewOfRadioButtons:{
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop:20,
            paddingBottom:20,
            borderTopWidth:2,
            borderColor:"#E0E0E0",
            borderBottomWidth:2,
            marginTop:15
        },
        sizeAndrequired:{
            flexDirection:"row"
        },
        sizeText:{
            color:"#4F4F4F",
            fontSize: RFPercentage(2.5),
            fontFamily: 'Biryani-Regular',
            fontWeight:"700",
            paddingTop:3
        },
        requiredView:{
            padding:7,
            backgroundColor:"#27AE60",
            marginLeft:20,
            borderRadius:5
        },
        requiredText:{
            color:"#FFFFFF",
            fontSize: RFPercentage(2),
            fontFamily: 'Biryani-Regular',
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.backgroundPizzaView}>
                {/* background Image */}
                <ImageBackground source={BackgroundPizzaImg}
                    style={{ height: parseInt(Dimensions.get('window').height) * 0.28, resizeMode: "cover", borderRadius: 90 }} >
                    <View style={styles.backImgAndTextView}>
                        <Image source={require("../../assets/images/arrowBack2.png")} style={styles.arrowBackImg} />
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
                </View>
            </View>
        </View>
    );
}