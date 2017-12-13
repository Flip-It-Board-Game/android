import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Animated,
  AsyncStorage,
  Easing
} from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component'
import Buttons from './buttons'
import { Button } from 'native-base'
import { connect } from 'react-redux'
import Reset from './reset'
import Solution from './solution'
// import Menu from './menu'

class youWon extends Component {
  constructor(props) {
    super(props)
    this.spinValue = new Animated.Value(0)
  }

  componentDidMount() {
    this.spin()
  }
  spin() {
    this.spinValue.setValue(0)
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear
    }).start(() => this.spin())
  }

  render() {
    let moves = this.props && this.props.count.count
    let dimensions = this.props && this.props.dimensions
    if (dimensions.height === 2 && dimensions.width === 2) {
      AsyncStorage.setItem('twoTwo', moves.toString())
    }
    if (dimensions.height === 3 && dimensions.width === 2) {
      console.log('hererere')
      AsyncStorage.setItem('twoThree', moves.toString())
    }
    if (dimensions.height === 3 && dimensions.width === 3) {
      AsyncStorage.setItem('threeThree', moves.toString())
    }
    if (dimensions.height === 4 && dimensions.width === 3) {
      AsyncStorage.setItem('threeFour', moves.toString())
    }
    if (dimensions.height === 4 && dimensions.width === 4) {
      AsyncStorage.setItem('fourFour', moves.toString())
    }
    if (dimensions.height === 5 && dimensions.width === 4) {
      AsyncStorage.setItem('fourFive', moves.toString())
    }
    if (dimensions.height === 5 && dimensions.width === 5) {
      AsyncStorage.setItem('fiveFive', moves.toString())
    }
    if (dimensions.height === 6 && dimensions.width === 5) {
      AsyncStorage.setItem('fiveSix', moves.toString())
    }
    if (dimensions.height === 6 && dimensions.width === 6) {
      AsyncStorage.setItem('sixSix', moves.toString())
    }
    if (dimensions.height === 7 && dimensions.width === 6) {
      AsyncStorage.setItem('sixSeven', moves.toString())
    }
    if (dimensions.height === 7 && dimensions.width === 7) {
      AsyncStorage.setItem('sevenSeven', moves.toString())
    }
    if (dimensions.height === 8 && dimensions.width === 7) {
      AsyncStorage.setItem('sevenEight', moves.toString())
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    })
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <View style={styles.container}>
        <Animated.Image
          style={{
            width: 227,
            height: 200,
            margin: 100,
            transform: [{ rotate: spin }]
          }}
          source={require('../images/CartRuby.png')}
        />
      </View>
    )
  }
}

const mapstate = state => {
  return {
    bool: state.bool,
    dimensions: state.dimensions,
    count: state.count,
    won: state.won
  }
}

export default connect(mapstate)(youWon)
