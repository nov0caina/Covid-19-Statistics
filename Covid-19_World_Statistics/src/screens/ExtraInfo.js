import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native'
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
          <View style={styles.avatarContainer}>
            <Image
              source={require('../images/logo.png')}
              style={styles.avatar}
            />
            <Text style={styles.textDash}>Algunos tips para reducir el riesgo de contagio y desinformación</Text>
          </View>

          <View style={styles.infoContainerRight}>
            <InfoRight
              path={require("../images/washHands.png")}
              Text="Lava tus manos con agua y jabón durante 20 segundos."
            />
          </View>

          <View style={styles.infoContainerLeft}>
            <InfoLeft
              path={require("../images/mask.png")}
              Text="Usar un cubrebocas quirurjico reduce la posibilidad de contagios."
            />
          </View>

          <View style={styles.infoContainerRight}>
            <InfoRight
              path={require("../images/estornudo.png")}
              Text="Tose o estornuda en la parte interna de tu codo."
            />
          </View>

          <View style={styles.infoContainerLeft}>
            <InfoLeft
              path={require("../images/fakeNews.png")}
              Text="No esparzas noticias falsas que puedan crear panico y desinformación en la sociedad."
            />
          </View>

          <View style={styles.button}>
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
  infoContainerRight: {
    width: "90%",
    marginBottom: 15
  },
  infoContainerLeft: {
    width: "90%",
    marginBottom: 15
  },
  button: {
  marginBottom: 80
  },
  avatarContainer: {
    width: "100%",
    alignItems: 'flex-end',
    marginTop: 30,
    marginBottom: 30
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  textDash: {
    color: "#FFF",
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 'bold'
  }
})