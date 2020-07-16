import React from 'react'
import { ScrollView, StyleSheet, Image, Text, View, Dimensions, TouchableOpacity, StatusBar } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {tickGreeenImg , dishesImg, pizzaName, heartImg, discription, starImg, price } from '../../assets/styleGuide/style'

export default () => {

    const styles = StyleSheet.create({
        container: {
            top: "2%",
            bottom: "5%",
            display: "flex",
            alignItems: "center",
        },
        insideContainer: {
            width: "95%"
        },
        mainViewOfBox: {
            backgroundColor: "#fff",
            elevation: 1,
            marginBottom: 10,
            borderRadius: 10,
            padding: 10,
            width: "100%",
        },
        boxView: {
            flexDirection: "row"
        },
        rightPortionInsideBox: {
            paddingLeft: 15,
            width: "70%"
        },
        dishHeadingAndImage: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 20,
            paddingRight: 25,
            width: "100%"
        },
        pizzaNameAndHeartImg: {
            flexDirection: "row",
            justifyContent: "space-between",
            display: "flex",
            width: "100%"
        },
        starsAndPriceView: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 10
        },
        viewOfAllStarts: {
            flexDirection: "row",
        },
        quantityAndPriceView:{
            flexDirection:"row",
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
            {/* <View> */}
            <View style={styles.insideContainer}>
                {/*  main box view of pizza image and reviews */}
                <View style={styles.mainViewOfBox}>
                    {/* box view  */}
                    <View style={styles.boxView}>
                        {/* image */}
                        <View style={{ width: "30%" }}>
                            <Image source={require("../../assets/images/pizza.png")} style={[dishesImg]} />
                        </View>
                        {/* right side text and image */}
                        <View style={styles.rightPortionInsideBox}>
                            {/* first portion */}
                            <View style={styles.pizzaNameAndHeartImg}>
                                <View style={styles.pizzaNameView}>
                                    <Text style={[pizzaName]}>Pizza Celentano</Text>
                                </View>
                                <View style={styles.heartImgView}>
                                    <Image source={require("../../assets/images/heart.png")} style={[heartImg]} />
                                </View>
                            </View>
                            {/* discription */}
                            <View>
                                <Text style={[discription]}>Bargedar Blue, Mozarella, Pepparoni, Alfredo Sause</Text>
                            </View>
                            {/* starts images and price */}
                            <View style={styles.starsAndPriceView}>
                                <View style={styles.viewOfAllStarts}>
                                    <Image source={require("../../assets/images/star.png")} style={[starImg]} />
                                    <Image source={require("../../assets/images/star.png")} style={[starImg]} />
                                    <Image source={require("../../assets/images/star.png")} style={[starImg]} />
                                    <Image source={require("../../assets/images/star.png")} style={[starImg]} />
                                    <Image source={require("../../assets/images/star.png")} style={[starImg]} />
                                </View>
                                <View style={styles.quantityAndPriceView}>
                                    <Text style={[price]}>15,90$</Text>
                                    <Image source={require("../../assets/images/greenTick.png")}  styles={[tickGreeenImg]}/>
                                </View>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
        </View>
    );
}