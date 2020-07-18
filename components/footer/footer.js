import React from 'react'
import { ScrollView, StyleSheet, Image, Text, View, Dimensions, TouchableOpacity, StatusBar, ImageBackground } from 'react-native'

export default (props) => {
  let { navigation, currentScreen } = props;
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
      elevation: 1,
      borderWidth: 1,
      borderColor: "#FFFFFF",
    },
    footerImgView: {
      padding: 20,
    },
    footerImage: {
      width: 19,
      height: 21
    },
    footerProfileImage: {
      width: 22,
      height: 22
    },
    footerCartImage: {
      width: 21,
      height: 20
    },
    footerDocumentImage: {
      width: 18,
      height: 22
    }

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
              <View style={styles.footerImgView}>
                <Image source={currentScreen === "home" ? require("../../assets/images/activeHome.png") : require("../../assets/images/file.png")} style={styles.footerImage} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              navigation.navigate("Cart")
            }}>
              <View style={styles.footerImgView}>
                <Image source={currentScreen === "cart" ? require("../../assets/images/activeCart.png") : require("../../assets/images/cart.png")} style={styles.footerCartImage} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.footerImgView}>
                <Image source={require("../../assets/images/document.png")} style={styles.footerDocumentImage} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.footerImgView}>
                <Image source={require("../../assets/images/profileIcon.png")} style={styles.footerProfileImage} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </View >
  );
}