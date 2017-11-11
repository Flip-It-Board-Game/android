import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import store from '../components/store/store'
import LevelCreate from './LevelCreate'
import Grid from '../components/grid'

class LevelSelector extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <LevelCreate />
        </View>
      </Provider>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
    justifyContent: 'center'
  }
})

export default LevelSelector
