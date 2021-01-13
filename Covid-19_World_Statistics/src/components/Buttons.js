import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'

const Buttons = (props) => {
  
  return (
    <View style={styles.container}>      
      <View>
        <Icon style={styles.iconStyle} size={25} name="md-heart" />
      </View>            
      <Text style={styles.btnName} onPress={() => { Linking.openURL('https://infodemia.mx/categoria?categorias%5B0%5D=covid'); }}>{props.name}</Text>
    </View>    
  );
  
}



const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: "red",
    borderWidth: 0.3,
    marginHorizontal: 30,
    paddingHorizontal: 20,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    backgroundColor: "#292D3E"
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: '#fff'
  },
  iconStyle: {
    color: "#E2252B",
    marginLeft:8
  },
  btnName: {
    fontWeight: 'bold',
    color: "#FFF",
    fontSize: 18,
    marginLeft: 20
  },
  number: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 14,
    marginLeft: 90
  }
})
export default Buttons;