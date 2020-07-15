import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import pizzaMenu from "../../components/pizzaMenus/pizzaMenu";

export const Heading = {
    fontSize: RFPercentage(5),
    fontFamily: 'Biryani-Bold',
}

// dishes components css starts from here
export const dishesHeading = {
    color:"#333333",
    fontSize: RFPercentage(3),
    fontFamily: 'Biryani-Bold',
    fontWeight: '700'
}
export const searchImg = {
    width:20,
    height:20
}
export const dishesImg = {
    width:90,
    height:90
}
export const pizzaName = {
    color:"#4F4F4F",
    fontSize: RFPercentage(3),
    fontFamily: 'Biryani-Bold',
    fontWeight: '500',
}
export const heartImg = {
    width:22,
    height:20,
}
export const discription = {
    color:"#828282",
    fontSize: RFPercentage(1.8),
    fontFamily: 'Biryani-Regular',
    width:200,
    paddingTop:10,
    lineHeight:15
}
export const starImg = {
    width:19,
    height:19
}
export const price = {
    color:"#4F4F4F",
    fontSize: RFPercentage(2),
    fontFamily: 'Biryani-Bold',
    fontWeight:"500"
}
// dishes components css ends here
// your cart page css
export const mainListContainer = {
    marginTop: "5%",
}
export const insidelistMainView = {
    borderTopWidth: 1,
    borderColor: '#F2F2F2',
    paddingTop: 20,
    borderBottomWidth: 1,
    paddingBottom: 20,
    paddingLeft: 18,
    paddingRight: 18
}
export const listAndPriceView = {
    borderTopWidth: 1,
    borderColor: '#F2F2F2',
    paddingTop: 20,
    borderBottomWidth: 1,
    paddingBottom: 20,
    paddingLeft: 18,
    paddingRight: 18,
    flexDirection:"row",
    justifyContent:"space-between"
}
export const listText = {
    color: "#828282",
    fontSize: RFPercentage(2.5),
    fontFamily: 'Biryani-Bold',
}
//cart css ends here
// pizzaMenu css starts from here
export const pizzaheaderText = {
    color: "#FFFFFF",
    fontSize: RFPercentage(2.5),
    fontFamily: 'Biryani-Bold',
    borderWidth: 1,
    borderColor: '#F2F2F2',
    padding:8,
    borderRadius:50
}

export const insideLinearGradient = {
    paddingLeft:4,
    paddingRight:4,
    paddingTop:"5%",
    paddingBottom:"3%"
}
// footer css starts from here
export const commonButtonFooter = {
    backgroundColor:"#F14336",
    width:"90%",
    padding:15,
    borderRadius:10 ,
    elevation:2,
}
export const buttonText = {
    color:"#fff",             
    fontSize: RFPercentage(3),
    fontWeight:"600",
    textAlign:"center",
    fontFamily: 'Biryani-Bold',
}