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
    backgroundColor: "#2e2f30",
    borderRadius: 20,
    alignItems: 'flex-end',
    padding:10
  },
  imagen: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 100,    
    marginTop:8
  },
  text: {
    color: 'white',        
  }
})