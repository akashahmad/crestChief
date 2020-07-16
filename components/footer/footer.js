import React from 'react'
import { ScrollView, StyleSheet, Image, Text, View, Dimensions, TouchableOpacity, StatusBar, ImageBackground } from 'react-native'

export default (props) => {
  let { navigation } = props;
  const styles = StyleSheet.create({
    container: {
      height: "100%",
      paddingTop: "5%",
    },
    menuOptionsofFooter: {
      marginTop: "3%"
    },
    imgContainerofFooter: {
      backgroundColor: "#fff",
      flexDirection: "row",
      justifyContent: "space-around",
      paddingTop: 20,
      paddingBottom: 20,
      elevation: 1,
      borderWidth: 1,
      borderColor: "#FFFFFF",
    },
  })

  return (
    <View style={StyleSheet.container}>
      <View>
        {/* button */}
        {/* below button */}
        <View style={styles.menuOptionsofFooter}>
          <View style={styles.imgContainerofFooter}>
            <TouchableOpacity onPress={() => {
              navigation.navigate("HotelPopolarDishes")
            }}>
              <Image source={require("../../assets/images/file.png")} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              navigation.navigate("Cart")
            }}>
              <Image source={require("../../assets/images/cart.png")} />
            </TouchableOpacity>
            <Image source={require("../../assets/images/document.png")} />
            <Image source={require("../../assets/images/profileIcon.png")} />
          </View>
        </View>
      </View>

    </View>
  );
}