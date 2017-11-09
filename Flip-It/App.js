import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import Grid from './components/grid'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Grid />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
})
