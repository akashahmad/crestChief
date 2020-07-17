import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Menu from '../../components/menu/menu'


export default (props) => {
  let { navigation } = props;

  const [infoPage, setInfoPage] = useState(false);
  const [reviewPage, setReviewPage] = useState(false);
  const [popuparPage, setPopularPage] = useState(true);

  return (
    <View style={{ height: "100%" }}>
      <Menu navigation={navigation} infoPage={infoPage}
        reviewPage={reviewPage} popuparPage={popuparPage} setInfoPage={setInfoPage}
        setPopularPage={setPopularPage} setReviewPage={setReviewPage}
        />
    </View>
  );
}