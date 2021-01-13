import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Platform,
  AppState,
  TouchableOpacity,
  Button,
  ActivityIndicator
} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import Deck from '../components/Deck';
import Cards from '../components/Cards';
import RealoadIcon from '../components/ReloadIcon';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import CountryPicker from '../components/countryPicker';
import { CountryList } from '../common/CountryList';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //API 
      isLoading: true,
      apiKey: '509e252283msh9e38ba0724b24f2p10d7e0jsn0552ad2b4e5e',
      apiHost: 'covid19-monitor-pro.p.rapidapi.com',
      //A nivel mundial      
      totalCases: null,
      totalRecovered: null,
      totalDeaths: null,
      //Por país
      newCountryCases: null,
      totalCountryRecovered: null,
      newCountryDeaths: null,
      updateDeck: false,
      //Geolocalization
      location: null,
      errorMessage: null,
      name: '',
      //CountryPicker 
      countryNamePickerVisible: false,
      selectedCountry: [],
      appState: AppState.currentState,
    };
  }

  countryDATA = [
    {
      id: 1,
      title: "CASOS DE COVID EN LAS ULTIMAS 24hrs",
      number: null,
    },
    {
      id: 2,
      title: "FALLECIMIENTOS EN LAS ULTIMAS 24hrs",
      number: null,
    },
    {
      id: 3,
      title: "TOTAL DE RECUPERADOS",
      number: null,
    }
  ]

  casosTotalesMundo = async () => {
    return fetch("https://covid19-monitor-pro.p.rapidapi.com/coronavirus/worldstat.php", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": this.state.apiKey,
        "x-rapidapi-host": this.state.apiHost
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          totalCases: responseJson.total_cases,
          totalRecovered: responseJson.total_recovered,
          totalDeaths: responseJson.total_deaths,
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  casosPorPais = async () => { //Fetch datos de pais, recibe el nombre del pais y lo manda como parametro en la llamada a la api
    const country = this.state.selectedCountry;
    const apiUrl = `https://covid19-monitor-pro.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=${country}`;
    return fetch(apiUrl, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": this.state.apiKey,
        "x-rapidapi-host": this.state.apiHost
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          newCountryCases: responseJson.latest_stat_by_country[0].new_cases,
          newCountryDeaths: responseJson.latest_stat_by_country[0].new_deaths,
          totalCountryRecovered: responseJson.latest_stat_by_country[0].total_recovered
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  //Manejador de cambios de estado de la aplicación (cambios de pantalla e inactividad)
  handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active') {
      console.log('Eres la polla con cebolla!');
      this.casosPorPais();
      this._getLocationAsync();
    }
    this.setState({ appState: nextAppState })
  }

  UNSAFE_componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange)
  }

  UNSAFE_componentWillMount() { //componentDidMount
    AppState.addEventListener('change', this.handleAppStateChange)
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this.state.selectedCountry = ['Mexico'];
      this._getLocationAsync();
    }
  }//Fin manejador de estados

  //Pide permisos de localizacion geografica GPS
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
    this.casosTotalesMundo();
    this.casosPorPais();
  };//Fin Geolocalizacion

  //Render de tarjetas con estadisticas de Covid en la posicion geografica actual o del pais seleccionado
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
            />
            <Text style={styles.number}>{item.number}</Text>
          </View>
          <View style={{ marginLeft: 150 }}>
            <Icon name="md-medical" size={24} color="#FFF" />
            <Text style={styles.textCovid}>COVID-19</Text>
          </View>
        </View>
      </View>
    );
  }

  renderNoMoreCards() {
    return (
      <View title="All Done!">

      </View>
    );
  }//Fin tarjetas

  render() {

    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    }
    else {
      let total_Cases = this.state.totalCases;
      let total_Recovered = this.state.totalRecovered;
      let total_Deaths = this.state.totalDeaths;
      let new_CountryCases = this.state.newCountryCases;
      let total_CountryRecovered = this.state.totalCountryRecovered;
      let new_CountryDeaths = this.state.newCountryDeaths;
      let selectedCountry = this.state.selectedCountry[0];

      this.countryDATA = [
        {
          id: 1,
          title: `Casos de COVID en ${selectedCountry} durante las ultimas 24Hrs`,
          number: new_CountryCases
        },
        {
          id: 2,
          title: `Fallecimientos en ${selectedCountry} durante las ultimas 24Hrs`,
          number: new_CountryDeaths
        },
        {
          id: 3,
          title: `Total de recuperados en ${selectedCountry}`,
          number: total_CountryRecovered
        }
      ]

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
                  source={require('../images/logo.png')}
                  style={styles.avatar}
                />
              </View>
            </View>

            <Text style={styles.textDash}>Covid-19 World Statistics</Text>

            <TouchableOpacity
              onPress={() => this.setState({ countryNamePickerVisible: true })}
              style={styles.searchCountryBar}
            >
              <Text style={{ color: 'white', paddingLeft: 10, fontSize: 15 }}>
                {this.state.selectedCountry}
              </Text>
            </TouchableOpacity>


          </ImageBackground>
          <Deck
            data={this.countryDATA}
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
              title="CASOS TOTALES A NIVEL MUNDIAL"
              bg="red"
              number={total_Cases}
            />
            <Cards
              onPress={() => this.props.navigation.navigate('Details')}
              icon="md-happy"
              title="RECUPERADOS A NIVEL MUNDIAL"
              bg="#FFF"
              number={total_Recovered}
            />
            <Cards
              onPress={() => this.props.navigation.navigate('Details')}
              icon="ios-heart-dislike"
              title="FALLECIMIENTOS A NIVEL MUNDIAL"
              bg="#FFF"
              number={total_Deaths}
            />
          </ScrollView>

          <View>
            <CountryPicker
              onTap={(item) => this.setState({ selectedCountry: item })}
              onPress={() => this.casosTotalesMundo()}
              selectedCountry={this.state.selectedCountry}
              data={CountryList}
              isVisible={this.state.countryNamePickerVisible}
            />
          </View>

        </View>
      )
    }
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18191A"
  },
  searchCountryBar: {
    alignSelf: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#303133',
    justifyContent: 'space-around',
    width: '80%',
    borderRadius: 100,
    marginTop: 5
  },
  cardContainer: {
    height: 150,
    width: 320,
    alignSelf: "center",
    backgroundColor: "#3A3B3C",
    borderRadius: 30
  },
  card: {
    height: 150,
    width: 260,
    paddingTop: 20,
    paddingHorizontal: 30,
    backgroundColor: '#242526',
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
    color: "#bebebe",
    fontSize: 14,
    width: 90,
    marginLeft: -35,
    fontWeight: 'bold',
    marginTop: 20
  },
  noCard: {
    marginTop: 100,
    color: '#FFF',
    alignSelf: "center",
    backgroundColor: "#03A9F4"
  },
  map: {
    marginTop: 10,
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
    marginLeft: 240
  }


});