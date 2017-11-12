import React, { Component } from 'react'
import { View, Button, StyleSheet, Text } from 'react-native'
import GameScreen from './GameScreen'
import LevelSelector from './LevelSelector'
import Levels from './Levels'

class GameMenu extends Component {
  constructor(props) {
    super(props)
    this.clickAction = this.clickAction.bind(this)
  }

  clickAction() {
    this.props.navigation.navigate('GameScreen')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('GameScreen')}
          title="Start"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Levels')}
          title="Level Select"
          color="#841584"
        />

        <Button title="My Awesome Stats" color="#841584" />
        <Button
          onPress={() => this.props.navigation.navigate('GameSettings')}
          title="Settings"
        />

        <Button
          onPress={() => this.props.navigation.navigate('About')}
          title="About"
          color="#841584"
        />
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  }
})

export default GameMenu
