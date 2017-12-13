import React, { Component } from 'react'
import {
  AppRegistry,
  Button,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import GameMenu from './scene/GameMenu'
import GameScreen from './scene/GameScreen'
import LevelSelector from './scene/LevelSelector'
// import Levels from './scene/Levels'
import store from './components/store/store'
import { Provider } from 'react-redux'
import GameSettings from './scene/GameSettings'
import About from './scene/About'
import Test from './scene/Test'
import GameStats from './scene/GameStats'
console.disableYellowBox = true

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.pressHandler = this.pressHandler.bind(this)
  }
  static navigationOptions = {
    title: 'Home'
  }

  pressHandler() {
    this.props.navigation.navigate('GameMenu')
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TouchableHighlight onPress={this.pressHandler} title="Press Me">
            <Image style={styles.button} source={require('./gemspic.png')} />
          </TouchableHighlight>
        </View>
      </Provider>
    )
  }
}

const ModalStack = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  GameMenu: {
    screen: GameMenu
  },
  GameScreen: {
    screen: GameScreen
  },
  LevelSelector: {
    screen: LevelSelector
  },
  GameStats: {
    screen: GameStats
  },
  GameSettings: {
    screen: GameSettings
  },
  About: {
    screen: About
  },
  Test: {
    screen: Test
  }
})

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  backdrop: {
    resizeMode: 'cover'
  },
  button: {
    width: 375,
    height: 370,
    justifyContent: 'center'
  }
})

export default ModalStack
// AppRegistry.registerComponent('Flip-it', () => MyHomeScreen);
