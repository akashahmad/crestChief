import React from 'react'
import { Image, ScrollView, StyleSheet, ImageBackground, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import BackgroundPizzaImg from '../../assets/images/detailPageImage.png'

export default () => {

    const styles = StyleSheet.create({
        container: {
            height: "100%"
        },
        backgroundPizzaView:{
            borderRadius:90
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.backgroundPizzaView}>
                <ImageBackground source={BackgroundPizzaImg}
                    style={{ height: parseInt(Dimensions.get('window').height) * 0.30, resizeMode: "cover", borderRadius: 90 }} >
                        <View>
                            
                        </View>
                </ImageBackground>
            </View>
        </View>
    );
}