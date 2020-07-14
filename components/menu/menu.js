import React from 'react'
import { Image, ScrollView, StyleSheet, ImageBackground, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import Resturent from '../../assets/images/resturant.png'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Dishes from '../dishes/dishes'
import { dishesHeading, searchImg } from '../../assets/styleGuide/style'

export default () => {

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
            padding: 20,
            elevation: 2,
            shadowColor: '#000',
        },
        commonCssText: {
            color: "#4F4F4F",
            fontSize: RFPercentage(2.3),
        },
        menu: {
            color: "#EB5757",
            fontSize: RFPercentage(2.3),
        },
        componentCalled:{
            height:"100%",
            marginTop:"15%",
            marginBottom:"10%"
        },  
        dishHeadingAndImage: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 20,
            paddingRight: 25,
            // top:0
        }
    })

    return (
        // <View >
            <ScrollView style={styles.container}>
                <View style={styles.backgroundImgMainView}>
                    <ImageBackground source={Resturent}
                        style={{ height: parseInt(Dimensions.get('window').height) * 0.40, resizeMode: "cover", borderRadius: 90 }} >
                        <View style={styles.headerAboveBackground}>
                            <View>
                                <View>
                                    <Text style={styles.headingCelentano}>Celentano</Text>
                                </View>
                                {/* main View of left side and right side Data */}
                                <View style={styles.imgStartsAndRightSideImage}>
                                    {/* left side Data */}
                                    <View style={styles.imgANndStarts}>
                                        <View>
                                            <Image source={require("../../assets/images/star.png")} style={styles.tinyStar} />
                                        </View>
                                        <View>
                                            <Text style={styles.starText}>4.5</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.Nearby}>Nearby</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.dolar}>$$ </Text>
                                        </View>
                                    </View>
                                    {/* right side arrow image */}
                                    <View style={styles.rightSide}>
                                        <Image source={require("../../assets/images/Vector.png")} style={styles.tinyArrow} />
                                    </View>
                                </View>
                                {/* menu box */}
                            </View>
                        </View>
                        <View style={styles.menuBoxMainView}>
                            <View style={styles.menuBox}>
                                {/* info */}
                                <TouchableOpacity>
                                    <View>
                                        <Text style={styles.commonCssText}>Info</Text>
                                    </View>
                                </TouchableOpacity>
                                {/* Menu */}
                                <TouchableOpacity>
                                    <View >
                                        <Text style={styles.menu}>Menu</Text>
                                    </View>
                                </TouchableOpacity>
                                {/* Reviews */}
                                <TouchableOpacity>
                                    <View>
                                        <Text style={styles.commonCssText}>Reviews</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                {/* component called */}
                <View style={styles.componentCalled} >
                    <View style={styles.dishHeadingAndImage}>
                        <Text style={[dishesHeading]}>Popular Dishes</Text>
                        <Image source={require("../../assets/images/search.png")} style={[searchImg]} />
                    </View>
                    {/* component dishes */}
                    <View> 
                        <Dishes />
                        <Dishes />
                        <Dishes />
                        <Dishes />
                    </View>
                </View>
            </ScrollView>
        // </View>
    );
}