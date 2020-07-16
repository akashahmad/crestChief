import React, { useState, useEffect } from 'react';
import Auth from "./screens/discoverSpecialOffers";
import Navigations from "./navigations";
import { View } from "react-native";
export default (props) => {
  let { navigation } = props;
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {

  }, []);

  return(
    loggedIn ?
      <Navigations />
      :
      <Auth setLoggedIn={setLoggedIn} />
  )

}


