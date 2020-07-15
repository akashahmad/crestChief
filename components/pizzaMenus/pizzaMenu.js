import React from 'react'
import { ScrollView, StyleSheet, Image, Text, View, Dimensions, TouchableOpacity, StatusBar, ImageBackground } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { dishesHeading, searchImg, pizzaheaderText, insideLinearGradient } from '../../assets/styleGuide/style'
import Dishes from '../dishes/dishes'

export default () => {

    const styles = StyleSheet.create({
        container: {
            height: "100%"
        },
        headerMainView: {
            height: "22%",
        },
        pizzaMenuLinearGradient: {
            height: "100%",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingLeft: 20,
            paddingRight: 20
        },
        insideHorizontalScroll: {
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center"
        },
        horizontalScroll: {
            height: "100%"
        },
        dishHeadingAndImage: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 20,
            paddingRight: 25,
            marginTop: "8%",
            paddingBottom: "2%"
        }
    })

    return (
        <View style={styles.container}>
            {/* pizza menu scrolible header */}
            <View style={styles.headerMainView}>
                <LinearGradient style={styles.pizzaMenuLinearGradient} colors={["#000000", "#424242"]}
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                    <ScrollView horizontal={true} style={styles.horizontalScroll}>
                        <View style={styles.insideHorizontalScroll}>
                            <View style={[insideLinearGradient]}>
                                <Text style={[pizzaheaderText]}>Waffles</Text>
                            </View >
                            <View style={[insideLinearGradient]}>
                                <Text style={[pizzaheaderText]}>Pankakes</Text>
                            </View>
                            <View style={[insideLinearGradient]}>
                                <Text style={[pizzaheaderText]}>Picked For You</Text>
                            </View>
                            <View style={[insideLinearGradient]}>
                                <Text style={[pizzaheaderText]}>Picked For You</Text>
                            </View>
                            <View style={[insideLinearGradient]}>
                                <Text style={[pizzaheaderText]}>Picked For You</Text>
                            </View>
                            <View style={[insideLinearGradient]}>
                                <Text style={[pizzaheaderText]}>Picked For You</Text>
                            </View>
                            <View style={[insideLinearGradient]}>
                                <Text style={[pizzaheaderText]}>Picked For You</Text>
                            </View>
                        </View>
                    </ScrollView>
                </LinearGradient>
            </View>
            <View style={{height:"100%"}}>
                <View>
                    <View style={styles.dishHeadingAndImage}>
                        <Text style={[dishesHeading]}>Popular Dishes</Text>
                        <Image source={require("../../assets/images/search.png")} style={[searchImg]} />
                    </View>
                    <ScrollView>
                        <View style={{marginBottom:"70%"}}>
                            <Dishes />
                            <Dishes />
                            <Dishes />
                            <Dishes />
                            <Dishes />
                            <Dishes />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}