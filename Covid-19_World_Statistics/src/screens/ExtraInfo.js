import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Buttons from '../components/Buttons';

export default class ExtraInfo extends Component {
  render() {
    return (
      <View>
        
        <View style={{ marginBottom: 15, marginTop:470 }}>
          <Buttons
            name="VER INFORMACION DE GOB.MX"
            icon="ios-exit"
          />
        </View>
      </View>
      
    )
  }
}
