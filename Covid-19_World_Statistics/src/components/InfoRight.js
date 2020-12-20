import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native'

export default class InfoRight extends Component {
  render() {
    return (
      <View style={styles.container}>
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
  container: {
    flex:1,    
    backgroundColor: "#3A3B3C",
    borderRadius: 20,
    alignItems: 'flex-end'
  },
  imagen: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 100,    
  },
  text: {
    color: 'white',    
    
  }
})