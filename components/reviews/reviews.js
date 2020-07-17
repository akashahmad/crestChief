import React, { useState, useEffect } from 'react'
import { TextInput, Image, ScrollView, StyleSheet, ImageBackground, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { starImg, discriptionOfReviews, dateReviewer, reviewerName, dishPrice, dishName, boxesImages, buttonText, commonButtonFooter, rightSideResturentImg, discriptionReview, imgResturents, text, imageOfInfo, textTwo } from '../../assets/styleGuide/style'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default () => {


    const [value, onChangeText] = React.useState('');

    const styles = StyleSheet.create({
        container: {
            height: "100%",
            paddingTop: "10%",
        },
        reviewerFullData: {
            padding: 20,
            borderBottomWidth: 2,
            borderColor: "#E0E0E0",
        },
        imgNameDateView: {
            flexDirection: "row",
            justifyContent: "space-between"
        },
        reviewSection: {
            paddingLeft: 20,
            paddingRight: 20
        },
        startImgs: {
            flexDirection: "row"
        },
        viewAllCommText: {
            color: "#EB5757",
            fontSize: RFPercentage(2.5),
            fontFamily: 'Biryani-Bold',
            textAlign: "center",
            paddingTop: 20,
            paddingBottom: 20,
            paddingBottom: 20,
            borderBottomWidth: 2,
            borderColor: "#E0E0E0",
        },

        mainDiscription: {
            marginTop: "8%",
            borderBottomWidth: 2,
            borderColor: "#E0E0E0",
            paddingTop: "4%",
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
            paddingLeft: 10,
            paddingRight: 10,
        }
    })

    return (
        <View style={styles.container}>
                <View style={{ marginBottom: "20%" }}>
                    {/* discription */}
                    <View style={styles.reviewerFullData}>
                        <View style={styles.imgNameDateView}>
                            <Image source={require("../../assets/images/zlatan.png")} />
                            <Text style={[reviewerName]}>Zlatan Ibrahimovic</Text>
                            <Text style={[dateReviewer]}>May 27, 2020</Text>
                        </View>
                        <View>
                            <Text style={[discriptionOfReviews]}>San Mariano is a cafe loacted Ghatkopar West and the outlet stand inside R City Mall. </Text>
                        </View>
                        <View style={styles.startImgs}>
                            <Image source={require("../../assets/images/star.png")} style={[starImg]} />
                            <Image source={require("../../assets/images/star.png")} style={[starImg]} />
                            <Image source={require("../../assets/images/star.png")} style={[starImg]} />
                            <Image source={require("../../assets/images/star.png")} style={[starImg]} />
                            <Image source={require("../../assets/images/star.png")} style={[starImg]} />
                        </View>
                    </View>
                    <View style={styles.reviewerFullData}>
                        <View style={styles.imgNameDateView}>
                            <Image source={require("../../assets/images/zlatan.png")} />
                            <Text style={[reviewerName]}>Zlatan Ibrahimovic</Text>
                            <Text style={[dateReviewer]}>May 27, 2020</Text>
                        </View>
                        <View>
                            <Text style={[discriptionOfReviews]}>San Mariano is a cafe loacted Ghatkopar West and the outlet stand inside R City Mall. </Text>
                        </View>
                        <View style={styles.startImgs}>
                            <Image source={require("../../assets/images/star.png")} style={[starImg]} />
                            <Image source={require("../../assets/images/star.png")} style={[starImg]} />
                            <Image source={require("../../assets/images/star.png")} style={[starImg]} />
                            <Image source={require("../../assets/images/star.png")} style={[starImg]} />
                            <Image source={require("../../assets/images/star.png")} style={[starImg]} />
                        </View>
                    </View>
                    <View style={styles.commentTextView}>
                        <Text style={styles.viewAllCommText}>View All Comments</Text>
                    </View>
                    <View style={styles.mainDiscription}>
                        <View>
                            <Text style={[discriptionReview]}>Rate and review</Text>
                        </View>
                        <View style={styles.mainDivOfBody}>
                            <TextInput
                                placeholder="Type Something"
                                style={{ marginTop:"3%" , padding:8 , height: 120, borderColor: '#E0E0E0', borderWidth: 1}}
                                multiline={true}
                                textAlignVertical={"top"}
                                maxLength={400}
                                onChangeText={text => onChangeText(text)}
                                value={value}
                            />
                        </View>
                        <View style={styles.buttonView}>
                            <TouchableOpacity style={[commonButtonFooter]}>
                                <Text style={[buttonText]}>Menu</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <View style={{marginTop:10}}>
                        </View> */}
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
        </View>
    );
}