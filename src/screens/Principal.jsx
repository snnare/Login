import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Principal() {
  return (
    <View>
        <Text style = {styles.container}>Zona de Usuarios</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2f9',
      textAlign: 'center',
      textAlignVertical: 'center',
      alignItems: 'center',
      justifyContent: 'center', 
    },
  });