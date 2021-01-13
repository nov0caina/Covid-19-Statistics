import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons';
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
        <ImageBackground
          source={require("../images/mapamundi.png")}
          style={styles.map}
        >
          <View style={styles.col}>
            <View style={{ width: "50%" }}>
              <Icon name="md-remove" color="#FFF" size={26} />
              <Icon
                name="md-remove"
                color="#FFF"
                size={26}
                style={styles.minusIcon}
              />
            </View>
            <View style={styles.avatarContainer}>
              <Image
                source={require('../images/logo.png')}
                style={styles.avatar}
              />
            </View>
          </View>
          <Text style={styles.textDash}>Consejos para prevenir el contagio del Covid-19</Text>

        </ImageBackground>

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
              name="Ver Noticias Verificadas"
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
  col: {
    flexDirection: 'row'
  },
  map: {
    marginTop: 10,
    height: 140,
    paddingTop: 25,
    paddingHorizontal: 20,
    marginBottom: 0
  },
  minusIcon: {
    marginTop: -20,
    marginLeft: 5
  },
  avatarContainer: {
    width: "50%",
    alignItems: 'flex-end',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  textDash: {
    color: "#FFF",
    fontSize: 20,
    alignSelf: 'center',    
    marginTop: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  infoContainerRight: {
    width: "90%",
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15
  },
  infoContainerLeft: {
    width: "90%",
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15
  },
  button: {
    marginBottom: 80
  },
  /*avatarContainer: {
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
    marginLeft: 20,
    marginRight: 20,
    fontWeight: 'bold'
  }*/
})