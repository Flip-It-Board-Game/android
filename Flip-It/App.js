import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import Grid from './components/grid'
import { Provider } from 'react-redux'
import store from './components/store/store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Grid />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
})
