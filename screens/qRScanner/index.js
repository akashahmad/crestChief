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
  View,
  Dimensions
} from 'react-native';
export default (props) => {
  let { navigation } = props;
  onSuccess = e => {
    navigation.navigate('HotelPopolarDishes')
    // console.log(e.data)
  };
  const [torchStatus, setTorchStatus] = useState(false)
  const styles = StyleSheet.create({

    markerStyle: {
      borderColor: "red",
    },

    containerStyle: {

    },
    cameraStyle: {
      height: 900
    },
    topViewStyle: {
      display: "none"
    },
    bottomViewStyle: {

    },
    qrText:{
      color:"#fff",
      fontSize: RFPercentage(3),
    }

  });
  return (
    <>
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.off}
        showMarker={true}
        topViewStyle={styles.topViewStyle}
        markerStyle={styles.markerStyle}
        cameraStyle={{ height: parseInt(Dimensions.get('window').height) * 1.1 }}
        containerStyle={styles.containerStyle}
        bottomContent={
          <View>
            <Text style={styles.qrText}>Scan QR Code</Text>
          </View>
        }
      />
    </>
  );
};

