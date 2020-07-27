import React from 'react'
import { TextInput, Image, ScrollView, StyleSheet, ImageBackground, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import Footer from '../footer/footer'

export default (props) => {
    let { navigation } = props;
    const styles = StyleSheet.create({
        container: {
            height: "100%"
        },
        linearGradeientView: {
            height: "30%",
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
        },
        backgrGradient: {
            height: "100%",
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
        },
        profileView: {
            height: "60%",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 20,
            marginTop: "10%"
        },
        imgAddphoto: {
            width: 70,
            height: 80
        },
        mainViewOFData: {
            width: "100%",
            alignItems: "center",
        },
        addDataView: {
            backgroundColor: "#fff",
            width: "90%",
            borderRadius: 10,
            padding: 10,
            marginTop: 20,
        },
        nameHeadingView: {
            width: "60%"
        },
        nameHeading: {
            color: "#000000",
            fontSize: RFPercentage(2.6),
            fontWeight: "600",
            paddingTop: "3%"
        },
        NameImage: {
            flexDirection: "row",
            justifyContent: "flex-end",
            width: "100%"
        },
        phoneImgTExtView: {
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: 10
        },
        crossView: {
            alignItems: "flex-end",
            paddingTop: 10,
            paddingRight: 10
        },
        crossImg: {
            width: 13,
            height: 13,
        },
        phoneImg: {
            width: 15,
            height: 15,
            paddingTop: "6%",
            marginRight: "2%",
        },
        messageImg: {
            width: 20,
            height: 14,
            marginTop: "1%",
            marginRight: "2%",
            marginBottom: "3%"
        },
        address: {
            color: "#4F4F4F",
            fontSize: RFPercentage(2),
            fontWeight: "600",
            textAlign: "center",
        },
        mainViewImgText: {
            marginTop: "30%",
            marginBottom: "20%"
        },
        profileImgTExt: {
            flexDirection: "row",
            paddingBottom: 15,
            marginTop: 10
        },
        profileSecondBorderImgTExt: {
            flexDirection: "row",
            borderTopWidth: 1,
            borderColor: "#E0E0E0",
            paddingTop: 15,
            paddingBottom: 15
        },
        imgOfheartContacts: {
            width: 25,
            height: 23,
            marginLeft: "5%"
        },
        imgOfcalenderContacts: {
            width: 23,
            height: 24,
            marginLeft: "5%"
        },
        imgOfContacts: {
            width: 23,
            height: 23,
            marginLeft: "5%"
        },
        textofImage: {
            paddingLeft: 15
        },
        footerView: {
            position: "absolute",
            height: "100%",
            justifyContent: "flex-end",
            width: "100%"
        }
    })

    return (
        <View style={StyleSheet.container}>
            <ScrollView >
                <View style={styles.linearGradeientView} >
                    <LinearGradient style={styles.backgrGradient} colors={["#000000", "#424242"]}
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                        {/* image */}
                        <View style={styles.profileView}>
                            <Image source={require("../../assets/images/addPhoto.png")} style={styles.imgAddphoto} />
                        </View>
                        {/* add data */}
                        <View style={styles.mainViewOFData}>
                            <View style={styles.addDataView}>
                                {/* name and pen image */}
                                <View style={styles.NameImage}>
                                    <View style={styles.nameHeadingView}>
                                        <Text style={styles.nameHeading}>Maxim Sirotkin</Text>
                                    </View>
                                    <TouchableOpacity style={styles.crossView} onPress={() => {
                                        navigation.navigate("AccountDetails")
                                    }}>
                                        <Image source={require("../../assets/images/pen.png")} style={styles.crossImg} />
                                    </TouchableOpacity>
                                </View>
                                {/* phone and image */}
                                <View style={styles.phoneImgTExtView}>
                                    <Image source={require("../../assets/images/phone.png")} style={styles.phoneImg} />
                                    <Text style={styles.address}>+1 (317) - 430- 1385</Text>
                                </View>
                                {/* email */}
                                <View style={styles.phoneImgTExtView}>
                                    <Image source={require("../../assets/images/messagered.png")} style={styles.messageImg} />
                                    <Text style={styles.address}>jane.kovacic@gmail.com</Text>
                                </View>
                            </View>
                        </View>
                    </LinearGradient>
                    {/* img and Text */}
                    <View style={styles.mainViewImgText} >
                        {/* heart */}
                        <TouchableOpacity style={styles.profileImgTExt}>
                            <Image source={require("../../assets/images/redHeart.png")} style={styles.imgOfheartContacts} />
                            <Text style={styles.textofImage}>Favourites</Text>
                        </TouchableOpacity>
                        {/* star */}
                        <TouchableOpacity style={styles.profileSecondBorderImgTExt}>
                            <Image source={require("../../assets/images/redStar.png")} style={styles.imgOfContacts} />
                            <Text style={styles.textofImage}>Restaurant Rewards</Text>
                        </TouchableOpacity>
                        {/* calender */}
                        <TouchableOpacity style={styles.profileSecondBorderImgTExt}>
                            <Image source={require("../../assets/images/calender.png")} style={styles.imgOfcalenderContacts} />
                            <Text style={styles.textofImage}>Reservation</Text>
                        </TouchableOpacity>
                        {/* payment */}
                        <TouchableOpacity style={styles.profileSecondBorderImgTExt}>
                            <Image source={require("../../assets/images/money.png")} style={styles.imgOfContacts} />
                            <Text style={styles.textofImage}>Payment</Text>
                        </TouchableOpacity>
                        {/* notification */}
                        <TouchableOpacity style={styles.profileSecondBorderImgTExt}>
                            <Image source={require("../../assets/images/bell.png")} style={styles.imgOfContacts} />
                            <Text style={styles.textofImage}>Notifications</Text>
                        </TouchableOpacity>
                        {/* invite friends */}
                        <TouchableOpacity style={styles.profileSecondBorderImgTExt}>
                            <Image source={require("../../assets/images/inviteFriends.png")} style={styles.imgOfContacts} />
                            <Text style={styles.textofImage}>Invite Friends</Text>
                        </TouchableOpacity>
                        {/* logout */}
                        <TouchableOpacity style={styles.profileSecondBorderImgTExt}>
                            <Image source={require("../../assets/images/logout.png")} style={styles.imgOfContacts} />
                            <Text style={styles.textofImage}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.footerView}>
                <Footer navigation={navigation} />
            </View>
        </View>
    );
}