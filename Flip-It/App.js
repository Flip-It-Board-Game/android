import React, { Component } from 'react'
import {
  AppRegistry,
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import GameMenu from './scene/GameMenu'
import Login from './scene/Login'
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
    this.login = this.login.bind(this)
    this.guest = this.guest.bind(this)
  }
  static navigationOptions = {
    title: 'Home'
  }

  login() {
    this.props.navigation.navigate('Login')
  }
  guest() {
    this.props.navigation.navigate('GameMenu')
  }

  render() {
    return (
      <Provider store={store}>
       <Image style={styles.image} 
       source={require('./images/gemspic.png')}>
        <View style={styles.container}> 
          <View style={styles.button}>
            <TouchableOpacity onPress={this.login}>
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.guest}>
              <Text style={styles.text}>Lets play now!</Text>
            </TouchableOpacity>
          </View>
        </View>
        </Image>
      </Provider>
    )
  }
}

const ModalStack = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Login: {
    screen: Login
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
    paddingLeft: 120,
    paddingRight: 120,
  },
  button: {
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: 'rgba(135,135,135,0.7)'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700'
}
})

export default ModalStack
