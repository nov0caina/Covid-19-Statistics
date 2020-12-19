import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import Buttons from '../components/Buttons';
import InfoRight from '../components/InfoRight';
import InfoLeft from '../components/InfoLeft';

export default class ExtraInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView          
          showsVerticalScrollIndicator={true}
          vertical
        >
          <View>
            <InfoRight
              path={require("../images/washHands.png")}
              Text="Lava tus manos con agua y jabón durante 20 segundos."
            />
            <InfoLeft
              path={require("../images/mask.png")}
              Text="Usar un cubrebocas quirurjico reduce la posibilidad de contagios."
            />
            <InfoRight
              path={require("../images/estornudo.png")}
              Text="Tose o estornuda en la parte interna de tu codo."
            />
            <InfoLeft
              path={require("../images/fakeNews.png")}
              Text="HOLAAAAAAAA"
            />
            <Buttons
              name="VER INFORMACION DE GOB.MX"
              icon="ios-exit"
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18191A"
  },
})