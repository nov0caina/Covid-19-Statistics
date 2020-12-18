import React from 'react'
import { View, Platform, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function ReloadIcon({ load }) {
  const reloadIconName = Platform.OS == 'ios' ? 'ios-refresh' : 'md-refresh'
  return (
    <View style={styles.reloadIcon}>
      <Ionicons onPress={load} name={reloadIconName} size={24} color='orange' />
    </View>
  )
}

const styles = StyleSheet.create({
  reloadIcon: {
    backgroundColor: "#FFF",
    elevation: 2,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: "center",
    marginLeft: 240
  }
})