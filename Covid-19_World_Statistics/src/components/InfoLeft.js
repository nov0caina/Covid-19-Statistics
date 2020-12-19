import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native'

export default class InfoLeft extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>{this.props.Text}</Text>
        <Image
          style={styles.imagen}
          source={this.props.path}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({  
  imagen:{    
    width:100,
    height:100,
    backgroundColor:'white',
    borderRadius:100
  },
  text:{
    color:'white'
  }
})