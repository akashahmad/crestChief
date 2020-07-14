import React from 'react'
import { ScrollView, StyleSheet, Image, Text, View, Dimensions, TouchableOpacity, StatusBar } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { dishesHeading, dishesImg, searchImg, pizzaName, heartImg, discription, starImg } from '../../assets/styleGuide/style'

export default () => {

    const styles = StyleSheet.create({
        container: {
            height: "100%",
            top: "6%"
        },
        mainViewOfBox: {
            backgroundColor: "#fff",
            elevation: 1,
            marginRight: 15,
            marginLeft: 15,
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 10,
            padding: 10,
        },
        boxView: {
            flexDirection: "row"
        },
        dishHeadingAndImage: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 20,
            paddingRight: 25
        },
        pizzaNameAndHeartImg: {
            flexDirection: "row",
            justifyContent: "space-between",
            display: "flex",
        },
    })

    return (
        <View style={styles.container}>
            <View>
                {/* heading main View */}
                <View style={styles.dishHeadingAndImage}>
                    <Text style={[dishesHeading]}>Popular Dishes</Text>
                    <Image source={require("../../assets/images/search.png")} style={[searchImg]} />
                </View>
                {/*  main box view of pizza image and reviews */}
                <View style={styles.mainViewOfBox}>
                    {/* box view  */}
                    <View style={styles.boxView}>
                        {/* image */}
                        <View>
                            <Image source={require("../../assets/images/pizza.png")} style={[dishesImg]} />
                        </View>
                        {/* right side text and image */}
                        <View>
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
                            <View>
                                <Image source={require("../../assets/images/heart.png")} style={[starImg]} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}