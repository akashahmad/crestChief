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
            height: "40%",
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
        },
        backgrGradient: {
            height: "100%",
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
        },
        profileView: {
            height: "40%",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 20,
            marginTop: "10%"
        },
        imgAddphoto: {
            width: 50,
            height: 60
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
            marginTop: 20
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
        saveTextView: {
            textAlign: "center",
            padding: 10,
        },
        saveText: {
            color: "#F14336",
            fontSize: RFPercentage(2.5),
            fontWeight: "600",
            textAlign: "center",
        },
        mainViewImgText: {
            marginTop: "25%",
            marginBottom: "30%"
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
                                <View>
                                    <TouchableOpacity style={styles.crossView} onPress={() => {
                                        navigation.navigate("Profile")
                                    }}>
                                        <Image source={require("../../assets/images/cross.png")} style={styles.crossImg} />
                                    </TouchableOpacity>
                                </View>
                                {/* inputs */}
                                <View>
                                    <TextInput
                                        placeholder="Full name"
                                        style={{ height: 40, borderColor: '#E0E0E0', borderBottomWidth: 1, padding: 5, width: "100%" }}
                                    />
                                    <TextInput
                                        placeholder="Phone number"
                                        style={{ height: 50, borderColor: '#E0E0E0', borderBottomWidth: 1, padding: 5, width: "100%" }}
                                    />
                                    <TextInput
                                        placeholder="E-mail"
                                        style={{ height: 50, borderColor: '#E0E0E0', borderBottomWidth: 1, padding: 5, width: "100%" }}
                                    />
                                </View>
                                {/* save Text */}
                                <View>
                                    <TouchableOpacity style={styles.saveTextView}>
                                        <Text style={styles.saveText}>Save</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </LinearGradient>
                    {/* img and Text */}
                    <View style={styles.mainViewImgText}>
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
                        <TouchableOpacity style={styles.profileSecondBorderImgTExt} onPress={() => {
                                        navigation.navigate("AccountDetails")
                                    }}>
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