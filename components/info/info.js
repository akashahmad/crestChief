import React from 'react'
import { Image, ScrollView, StyleSheet, ImageBackground, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { dishPrice, dishName, boxesImages, buttonText, commonButtonFooter, rightSideResturentImg, infoImageMainView, discriptionReview, imgResturents, text, imageOfInfo, textTwo } from '../../assets/styleGuide/style'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default () => {

    const styles = StyleSheet.create({
        container: {
            height: "100%",
            paddingTop: "10%",

        },
        reviewSection: {
            paddingLeft: 20,
            paddingRight: 20
        },
        imageOfPhone:{
            width:21,
            height:21
        },
        imageOfClock:{
            width:21,
            height:21
        },
        imageOfAddress:{
            width:17,
            height:22
        },
        imageOfEmail:{
            width:21,
            height:20,
            marginTop:"1%"
        },
        mainDiscription: {
            marginTop: "8%",
            borderTopWidth: 3,
            borderBottomWidth: 3,
            borderColor: "#F2F2F2",
            paddingTop: "5%",
            paddingBottom: "6%",
            fontWeight: "700",
            paddingLeft: 20,
            paddingRight: 20
        },
        mainDivOfBody: {
            width: "100%",
        },
        discriptionBody: {
            width: "95%",
            paddingTop: 15,
            color: "#828282",
            fontSize: RFPercentage(2.2),
            lineHeight: 20
        },
        photoSection: {
            borderTopWidth: 3,
            borderBottomWidth: 3,
            borderColor: "#F2F2F2",
            paddingTop: "5%",
            paddingBottom: "6%",
            fontWeight: "700",
            paddingLeft: 20,
            paddingRight: 20
        },
        photoMainView: {
            flexDirection: "row",
            paddingTop: 10,
            width: "100%"
        },
        buttonView: {
            alignItems: "center",
            marginTop: "5%"
        },
        mainViewOFPopular: {
            paddingTop: 15,
            paddingBottom: 15
        },
        wholeMenuText: {
            color: "#EB5757",
            fontSize: RFPercentage(2.5),
        },
        popularAndMenuHading: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 22,
            paddingRight: 22,
        },
        boxesMainView: {
            width: "100%",
            flexDirection: "row",
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 20
        },
        insideBoxesMainView: {
            paddingLeft:10,
            paddingRight:10,
        }
    })

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ marginBottom: "20%" }}>
                    <View style={styles.reviewSection}>
                        {/* info and images */}
                        <View style={[infoImageMainView]}>
                            <Image source={require("../../assets/images/phone.png")} style={styles.imageOfPhone} />
                            <Text style={[text]}>(+974) 4484 8663</Text>
                        </View>
                        <View style={[infoImageMainView]}>
                            <Image source={require("../../assets/images/clock.png")} style={styles.imageOfClock} />
                            <View>
                                <Text style={[text]}>Sunday - Saturday</Text>
                                <Text style={[textTwo]}>Friday : 2:00pm - 12:00 am</Text>
                            </View>
                        </View>
                        <View style={[infoImageMainView]}>
                            <Image source={require("../../assets/images/address.png")} style={styles.imageOfAddress} />
                            <Text style={[text]}>123 Main Street, New York</Text>
                        </View>
                        <View style={[infoImageMainView]}>
                            <Image source={require("../../assets/images/email.png")} style={styles.imageOfEmail} />
                            <Text style={[text]}>sanmariano.com</Text>
                        </View>
                    </View>

                    {/* discription */}
                    <View style={styles.mainDiscription}>
                        <View>
                            <Text style={[discriptionReview]}>Discription</Text>
                        </View>
                        <View style={styles.mainDivOfBody}>
                            <Text style={styles.discriptionBody}>San Mariano is a cafe loacted Ghatkopar
                            West and the outlet stand inside R City Mall.
                            The place has a simple and elegant ambiance.
                            Grandmama’s Cafe is a cafe loacted Ghatkopar
                            West and the outlet stand inside R City Mall.
                            The place has a simple and elegant ambiance.
                        </Text>
                        </View>
                    </View>
                    {/* <photos */}
                    <View style={styles.photoSection}>
                        <View>
                            <Text style={[discriptionReview]}>Photos</Text>
                        </View>
                        <View style={styles.photoMainView} >
                            <View style={{ width: "40%" }}>
                                <Image source={require("../../assets/images/resturant.png")} style={[imgResturents]} />
                                <Image source={require("../../assets/images/tables.png")} style={[imgResturents]} />
                            </View>
                            <View style={{ width: "60%" }}>
                                <Image source={require("../../assets/images/food.png")} style={[rightSideResturentImg]} />
                            </View>
                        </View>
                        <View style={styles.buttonView}>
                            <TouchableOpacity style={[commonButtonFooter]}>
                                <Text style={[buttonText]}>Menu</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* popular Dishes */}
                    <View style={styles.mainViewOFPopular}>
                        <View style={styles.popularAndMenuHading}>
                            <Text style={[discriptionReview]}>Popular Dishes</Text>
                            <Text style={styles.wholeMenuText}>Whole Menu</Text>
                        </View>
                        {/* boxes */}

                        <ScrollView horizontal={true}>
                            <View style={styles.boxesMainView}>
                                <View style={styles.insideBoxesMainView}>
                                    <Image source={require("../../assets/images/vegitables.png")} style={[boxesImages]} />
                                    <Text style={[dishName]}>Avocado Toast</Text>
                                    <Text style={[dishPrice]}>15,90$</Text>
                                </View>
                                {/* 2nd one */}
                                <View style={styles.insideBoxesMainView}>
                                    <Image source={require("../../assets/images/burger.png")} style={[boxesImages]} />
                                    <Text style={[dishName]}>Avocado Toast</Text>
                                    <Text style={[dishPrice]}>15,90$</Text>
                                </View>
                                {/* 3rd one */}
                                <View style={styles.insideBoxesMainView}>
                                    <Image source={require("../../assets/images/vegitables.png")} style={[boxesImages]} />
                                    <Text style={[dishName]}>Avocado Toast</Text>
                                    <Text style={[dishPrice]}>15,90$</Text>
                                </View>
                                <View style={styles.insideBoxesMainView}>
                                    <Image source={require("../../assets/images/vegitables.png")} style={[boxesImages]} />
                                    <Text style={[dishName]}>Avocado Toast</Text>
                                    <Text style={[dishPrice]}>15,90$</Text>
                                </View>
                                <View style={styles.insideBoxesMainView}>
                                    <Image source={require("../../assets/images/vegitables.png")} style={[boxesImages]} />
                                    <Text style={[dishName]}>Avocado Toast</Text>
                                    <Text style={[dishPrice]}>15,90$</Text>
                                </View>
                            </View>
                        </ScrollView>

                    </View>
                </View>
            </ScrollView>
        </View>
    );
}