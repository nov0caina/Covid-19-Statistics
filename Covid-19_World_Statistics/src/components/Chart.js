import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

export default class Chart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalCases: null,
      totalRecovered: null,
      totalDeaths: null,
    }
  }

  monthsNames = [
    "Casos",
    "Recuperados",
    "Fallecimientos",
  ];

  casosTotalesMundo = async () => {
    return fetch("https://covid19-monitor-pro.p.rapidapi.com/coronavirus/worldstat.php", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": '509e252283msh9e38ba0724b24f2p10d7e0jsn0552ad2b4e5e',
        "x-rapidapi-host": 'covid19-monitor-pro.p.rapidapi.com'
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({
          totalCases: responseJson.total_cases,
          totalRecovered: responseJson.total_recovered,
          totalDeaths: responseJson.total_deaths,
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  UNSAFE_componentWillMount() {
    this.casosTotalesMundo();
  }

  render() {
    let totalCases = this.state.totalCases;
    let totalRecovered = this.state.totalRecovered;
    let totalDeaths = this.state.totalDeaths
    console.log(totalCases);
    console.log(totalRecovered);
    console.log(totalDeaths);

    const data = {
      labels: this.monthsNames,
      datasets: [{
        data: [
          0,
          70430,
          92060
        ],
        color: () => '#297CA4',
        strokeWidth: 4
      },
      {
        data: [
          0,
          40430,
          65810
        ],
        color: () => '#29A47C'
      },
      {
        data: [
          0,
          9500,
          19700
        ],
        color: () => '#FF0000'
      }
      ]
    };

    return (
      <View style={{
        marginHorizontal: 20,
        marginTop: 30
      }}>
        <LineChart
          data={data}
          width={Dimensions.get('window').width}
          height={320}
          yAxisSuffix='k'
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: "#FFF",
            backgroundGradientFrom: "#FFF",
            backgroundGradientTo: "#FFF",
            decimalPlaces: 0,
            color: (opacity = 0) => `rgba(255,0,0, ${opacity})`,
            labelColor: (opacity = 0) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: '6',
              strokeWidth: "2",
              stroke: "black"
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}

        />
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.casosCol}>
            <Text style={{color: "#297CA4"}}>.....</Text>
          </View>
          <View style={styles.recuperadosCol}>
            <Text style={{color: "#29A47C"}}>.....</Text>
          </View>
          <View style={styles.fallecidosCol}>
            <Text style={{color: "#FF0000"}}>.....</Text>
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({  
  casosCol: {
    marginLeft:60,
    backgroundColor: "#297CA4",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 2
  },
  recuperadosCol: {
    marginLeft:60,
    backgroundColor: "#29A47C",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 2
  },
  fallecidosCol: {
    marginLeft:60,
    backgroundColor: "#FF0000",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 2
  }
})