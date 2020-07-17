import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, ImageBackground, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import Resturent from '../../assets/images/rest.png'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Dishes from '../dishes/dishes'
import { dishesHeading, searchImg } from '../../assets/styleGuide/style'
import Footer from '../footer/footer'
import { commonButtonFooter, buttonText } from '../../assets/styleGuide/style'
import Info from '../info/info'
import Reviews from '../reviews/reviews'

export default (props) => {
    let { navigation } = props;
    const [pageSwitch, setpageSwtich] = useState("");

    const componentSwitch = () => {
        switch (pageSwitch) {
            case "review":
                return <Reviews />;
            case "info":
                return <Info />;
            default:
                return <View style={styles.componentCalled} >
                    <View style={styles.dishHeadingAndImage}>
                        <View>
                            <Text style={[dishesHeading]}>Popular Dishes</Text>
                        </View>
                        <View>
                            <Image source={require("../../assets/images/search.png")} style={[searchImg]} />
                        </View>
                    </View>
                    <View style={{ height: "100%", marginBottom: "18%" }}>
                        <Dishes />
                        <Dishes />
                        <Dishes />
                        <Dishes />
                        <Dishes />
                        <View style={styles.buttonView}>
                            <TouchableOpacity style={[commonButtonFooter]} onPress={() => {
                                navigation.navigate("HotelMenu")
                            }}>
                                <Text style={[buttonText]}>Menu</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
        }
    }

    const styles = StyleSheet.create({
        container: {
            height: "100%",
        },
        headerAboveBackground: {
            height: "100%",
            display: "flex",
            justifyContent: "flex-end",
            paddingLeft: "5%",
            paddingRight: "6%",
            bottom: "22%",
            borderRadius: 90
        },
        headingAndReviewsMainDiv: {
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%"
        },
        headingCelentano: {
            fontSize: RFPercentage(4),
            fontFamily: 'Biryani-Bold',
            color: "#fff",
        },
        imgStartsAndRightSideImage: {
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: "2%",
        },
        imgANndStarts: {
            flexDirection: "row",
            paddingTop: 12
        },
        tinyStar: {
            width: 20,
            height: 20,
        },
        starText: {
            fontSize: RFPercentage(2.3),
            color: "#F2C94C",
            paddingLeft: "2%"
        },
        Nearby: {
            fontSize: RFPercentage(2.3),
            paddingLeft: "3%",
            color: "#FFFFFF"
        },
        dolar: {
            fontSize: RFPercentage(2.3),
            paddingLeft: "3%",
            color: "#FFFFFF"
        },
        // right side arrow image css
        rightSide: {
            height: "100%",
        },
        tinyArrow: {
            width: 20,
            height: 20,
        },
        // menu box css starts from here
        menuBoxMainView: {
            paddingLeft: 10,
            paddingRight: 10,
            bottom: "12%",
            zIndex: 1,
            position: "relative",
        },
        menuBox: {
            backgroundColor: "#fff",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-around",
            borderRadius: 10,
            elevation: 2,
            shadowColor: '#000',
        },
        mainViewOfLink: {
            padding: 20,
        },
        commonCssText: {
            color: "#4F4F4F",
            fontSize: RFPercentage(2.3),
        },
        activeTextMenu: {
            color: "#EB5757",
            fontSize: RFPercentage(2.3),
        },
        componentCalled: {
            // height: "100%",
            marginTop: "15%",
            marginBottom: "10%"
        },
        dishHeadingAndImage: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 20,
            paddingRight: 25,
            // top:0
        },
        footerMainView: {
            position: "absolute",
            bottom: 0,
            justifyContent: "flex-end",
            width: "100%"
        },
        buttonView: {
            alignItems: "center",
            marginTop: "10%"
        },
        touchableMenuLinks: {
            padding: 10
        }
    })

    return (
        <View style={styles.container}>
            <ScrollView >
                <View style={styles.backgroundImgMainView}>
                    <ImageBackground source={Resturent}
                        style={{ height: parseInt(Dimensions.get('window').height) * 0.40, resizeMode: "cover"}} >
                        <View style={styles.headerAboveBackground}>
                            <View style={styles.headingAndReviewsMainDiv}>
                                <View>
                                    <Text style={styles.headingCelentano}>Celentano</Text>
                                </View>
                                {/* main View of left side and right side Data */}
                                {/* <View style={styles.imgStartsAndRightSideImage} > */}
                                {/* left side Data */}
                                <View style={styles.imgANndStarts}>
                                    <View>
                                        <Image source={require("../../assets/images/star.png")} style={styles.tinyStar} />
                                    </View>
                                    <View>
                                        <Text style={styles.starText}>4.5</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.menuBoxMainView}>
                            <View style={styles.menuBox}>
                                {/* info */}
                                <TouchableOpacity onPress={() => { setpageSwtich("info") }}>
                                    <View style={styles.mainViewOfLink}>
                                        <Text style={pageSwitch === "info" ? styles.activeTextMenu : styles.commonCssText}>Info</Text>
                                    </View>
                                </TouchableOpacity>
                                {/* Menu */}
                                <TouchableOpacity onPress={() => { setpageSwtich("") }}>
                                    <View style={styles.mainViewOfLink}>
                                        <Text style={pageSwitch === "" ? styles.activeTextMenu : styles.commonCssText}>Menu</Text>
                                    </View>
                                </TouchableOpacity>
                                {/* Reviews */}
                                <TouchableOpacity onPress={() => { setpageSwtich("review") }}>
                                    <View style={styles.mainViewOfLink}>
                                        <Text style={pageSwitch === "review" ? styles.activeTextMenu : styles.commonCssText}>Reviews</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                {/* component called */}
                {/* dishes component */}
                {componentSwitch()}
                {/* info component */}
            </ScrollView >
            {/* footer */}
            <View style={styles.footerMainView} >
                <Footer navigation={navigation} currentScreen={"home"}/>
            </View>
        </View>
    );
}