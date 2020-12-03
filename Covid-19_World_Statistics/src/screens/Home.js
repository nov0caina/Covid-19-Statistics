import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ImageBackground
} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { ScrollView }
  from 'react-native-gesture-handler'
import Deck from '../components/Deck';
import Cards from '../components/Cards';
import Buttons from '../components/Buttons';


const DATA = [
  {
    id: 1,
    title: "CASOS DE COVID EN LAS ULTIMAS 24hrs",
    number: "1 838 456"
  },
  {
    id: 2,
    title: "FALLECIMIENTOS EN LAS ULTIMAS 24hrs",
    number: "29 863"
  },
  {
    id: 3,
    title: "RECUPERADOS EN LAS ULTIMAS 24hrs",
    number: "838 456"
  }
]
export default class Home extends Component {

  renderCard(item) {
    return (
      <View key={item.id} style={styles.cardContainer}>
        <View style={styles.card}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Icon
              name="ios-remove"
              size={40}
              color="red"
              style={{ marginTop: 25 }}
            />
            <Text style={styles.number}>{item.number}</Text>
          </View>
          <View style={{ marginLeft: 150 }}>
            <Icon name="md-options" size={24} color="#FFF" />
            <Text style={styles.textCovid}>COVID-19</Text>
          </View>
        </View>
      </View>
    );
  }

  renderNoMoreCards() {
    return (
      <View title="All Done!">        
        <Button style={styles.noCard} title="VULEVE MAÑANA" />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
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
                source={require('../images/nov0caina.png')}
                style={styles.avatar}
              />
            </View>
          </View>
          <Text style={styles.textDash}>Covid-19 World Statistics</Text>

          <View style={styles.colContainer}>
            <Text style={styles.textGlobal}>GLOBAL</Text>
            <Text style={styles.textCountryUser}>Mexico</Text>
            <View style={styles.reloadContainer}>
              <Icon name="md-refresh" size={24} color="orange" />
            </View>
          </View>
        </ImageBackground>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
        <ScrollView
          style={{ marginTop: 170 }}
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          <Cards
            onPress={() => this.props.navigation.navigate('Details')}
            icon="md-medkit"
            title="CASOS TOTALES"
            bg="red"
            number="113 329"
          />
          <Cards
            icon="md-happy"
            title="RECUPERADOS"
            bg="#FFF"
            number="442 329"
          />
          <Cards
            icon="ios-heart-dislike"
            title="FALLECIMIENTOS"
            bg="#FFF"
            number="113 329"
          />
        </ScrollView>
        <View style={{ marginBottom: 15 }}>
          <Buttons
            name="VER INFORMACION DE GOB.MX" 
            icon="ios-exit"           
          />          
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#658dd7"
  },
  cardContainer: {
    height: 150,
    width: 320,
    alignSelf: "center",
    backgroundColor: "#6A706E",
    borderRadius: 30
  },
  card: {
    height: 150,
    width: 260,
    paddingTop: 20,
    paddingHorizontal: 30,
    backgroundColor: '#292D3E',
    borderRadius: 30,
    flexDirection: 'row'
  },
  title: {
    color: "#B7B9BE",
    width: 100,
    fontSize: 12,
    fontWeight: "bold"
  },
  number: {
    color: "#FFF",
    width: 100,
    fontSize: 22,
    fontWeight: "bold",
    marginTop: -10,
  },
  textCovid: {
    transform: [{ rotate: "-90deg" }],
    color: "#3a4b4f",
    fontSize: 14,
    width: 90,
    marginLeft: -35,
    fontWeight: 'bold',
    marginTop: 20
  },
  noCard: {
    marginTop:100,    
    color: '#FFF',
    alignSelf: "center",
    backgroundColor:"#03A9F4"
  },
  map: {
    marginTop:10,
    height: 140,
    paddingTop: 25,
    paddingHorizontal: 20,
    marginBottom: 0
  },
  col: {
    flexDirection: 'row'
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
    fontWeight: 'bold'
  },
  colContainer: {
    flexDirection: "row",
    paddingHorizontal: 30,
    marginTop: 40,
    alignItems: 'center',
  },
  textGlobal: {
    fontWeight: "bold",
    fontSize: 16,
    color: "orange"
  },
  textCountryUser: {
    fontWeight: "bold",
    fontSize: 16,
    paddingHorizontal: 30,
    color: "#BEBEBE"
  },
  reloadContainer: {
    backgroundColor: "#FFF",
    elevation: 2,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: "center",
    marginLeft: 50
  }


});