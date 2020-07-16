// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

import React, { useState } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
export default (props) => {
  let { navigation } = props;
  onSuccess = e => {
    navigation.navigate('HotelPopolarDishes')
    // console.log(e.data)
  };
  const [torchStatus, setTorchStatus] = useState(false)
  const styles = StyleSheet.create({
    centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: '#777'
    },
    textBold: {
      fontWeight: '500',
      color: '#000'
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)'
    },
    markerStyle: {
      borderColor: "red",
      top: '20%'
    },
    buttonTouchable: {
      padding: 16
    },
    containerStyle: {
      display: "flex",
      height: '100%',
      position: "absolute",
      backgroundColor: "blue"

    },
    cameraStyle: {
      display: "flex",
      height: 600,
      position: "absolute"

    },
    topViewStyle: {
      display: "none"
    },
    bottomViewStyle: {
      display: "flex",
      position: "relative",
      top: 175,
      height: 20,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      backgroundColor: "white",
      justifyContent: "flex-start"
    },
    bottomView: {
      justifyContent: "center",
      top: 80,
      height: '20%'
    },
    mianButtonDives: {
      width: "100%",

    },
    buttonsMainDiv: {
      backgroundColor: "#F14336",
      width: "90%",
      borderRadius: 20
    },
    tochableButtonOne: {
      fontSize: RFPercentage(3),
      fontFamily: 'Biryani-Bold',
      color: "#fff",
      textAlign: 'center'
    },
    // button 2 css
    secondButtonMainView: {
      backgroundColor: "#fff",
      width: "90%",
      borderRadius: 20,
      borderColor: "black",
      textAlign: "center"
    },
    tochableSecondButton: {
      fontSize: RFPercentage(3),
      textAlign: "center",
      fontFamily: 'Biryani-Bold',
      color: "#333333",

    },
  });
  return (
    <>
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.off}
        showMarker={true}
        topViewStyle={styles.topViewStyle}
        markerStyle={styles.markerStyle}
        bottomViewStyle={styles.bottomViewStyle}
        // topContent={
        //   <Text style={styles.centerText}>

        //   </Text>
        // }
        cameraStyle={styles.cameraStyle}
        containerStyle={styles.containerStyle}
        bottomContent={
          <View style={styles.bottomView}>
            <View style={{ width: 400, height: 50, borderRadius: 10, marginTop: 10, textAlign: "center", justifyContent: "center", backgroundColor: "blue" }}>
              <TouchableOpacity style={{ textAlign: "center" }}>
                <Text style={styles.tochableButtonOne}>Torch</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: 400, height: 50, borderRadius: 10, marginTop: 10, textAlign: "center", alignItems: "center", justifyContent: "center", backgroundColor: "red" }}>
              <TouchableOpacity>
                <Text style={styles.tochableButtonOne}>CANCEL</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      />
    </>
  );
};

