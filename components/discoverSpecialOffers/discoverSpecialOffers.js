import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity, StatusBar } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import { commonButtonFooter, buttonText, Heading , whitebuttonText , whitecommonButtonFooter} from '../../assets/styleGuide/style'

export default (props) => {
  let { setLoggedIn } = props;
  const [images, setImages] = useState([
    require('../../assets/images/strawberry.png'),
    require('../../assets/images/beach.jpg'),
    require('../../assets/images/water.jpg')
  ])

  const styles = StyleSheet.create({
    container: {
      height: "100%",
    },
    imgSlider: {
      height: "50%",
      // backgroundColor: "#333333",
      // width:"100%"
    },
    dicoverHeadingandButtonsView: {
      flex: 1,
      zIndex: -1,
      position: "relative",
      display: "flex",
      alignItems: "center",
      paddingBottom: "20%"
    },
    dicoverHeading: {
      fontStyle: "normal",
      textAlign: "center",
      color: "#fff",
      width: "80%",
      top: "22%"
    },
    // button 1 css
    mianButtonDives: {
      width: "100%",
      top: "30%",
      display: "flex",
      alignItems: "center"
    },
    buttonsMainDiv: {
      backgroundColor: "#F14336",
      width: "90%",
      borderRadius: 20
    },
    tochableButtonOne: {
      fontSize: RFPercentage(3),
      textAlign: "center",
      fontFamily: 'Biryani-Bold',
      color: "#fff",
      paddingTop: 15,
      paddingBottom: 15,
    },
    // button 2 css
    secondButtonMainView: {
      marginTop: "8%",
      backgroundColor: "#fff",
      width: "90%",
      borderRadius: 20
    },
    tochableSecondButton: {
      fontSize: RFPercentage(3),
      textAlign: "center",
      fontFamily: 'Biryani-Bold',
      color: "#333333",
      paddingTop: 15,
      paddingBottom: 15,
    },
    buttonView: {
      alignItems: "center",
      width: "100%",
      marginBottom:"4%"
    },
  })

  return (

    <LinearGradient style={styles.container} colors={["#333333", "#424242"]}
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
      {/* <ScrollView > */}
      {/* main view tag of slider */}
      <View style={styles.imgSlider}>
        <SliderBox
          images={images}
          sliderBoxHeight={parseInt(Dimensions.get('window').height) * 0.50}
          onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
          dotColor="#F14336"
          inactiveDotColor="#fff"
          autoplay
          circleLoop
          dotStyle={{ position: "relative", top: parseInt(Dimensions.get('window').height) * 0.07, zIndex: 1, width: 9, height: 9 }}
          ImageComponentStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
        />
      </View>
      <View style={styles.dicoverHeadingandButtonsView}>
        <Text style={[styles.dicoverHeading, Heading]}>Discover Special Offers</Text>
        {/* first button */}
        {/* <View style={styles.buttonMainView}> */}
        <View style={styles.mianButtonDives}>
          <View style={styles.buttonView}>
            <TouchableOpacity onPress={() => {
              setLoggedIn(true)
            }}
              style={[commonButtonFooter]}>
              <Text style={[buttonText]}>Registration</Text>
            </TouchableOpacity>
          </View>
          {/* 2nd button */}
          <View style={styles.buttonView}>
            <TouchableOpacity onPress={() => {
              setLoggedIn(true)
            }}
              style={[whitecommonButtonFooter]}>
              <Text style={[whitebuttonText]}>Continue as a guest</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </View> */}
      {/* </ScrollView > */}
    </LinearGradient >
  );
}