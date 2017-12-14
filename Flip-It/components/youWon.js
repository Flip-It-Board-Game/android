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
    this.seeStats = this.seeStats.bind(this)
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

  seeStats = async () => {
    try {
      let moves = this.props.count.count
      let dimensions = this.props.dimensions
      //Checks if player's current performance stat is 'better' than stat on file, if so saves new stat
      for (let i = 2; i < 8; i++) {
        let currentStat = await AsyncStorage.getItem(`${i}${i}`)
        let currentStat_2 = await AsyncStorage.getItem(`${i}${i + 1}`)
        if (
          dimensions.height === i &&
          dimensions.width === i &&
          currentStat > moves
        ) {
          AsyncStorage.setItem(`${i}${i}`, moves.toString())
        }
        if (
          dimensions.height === i + 1 &&
          dimensions.width === i &&
          currentStat_2 > moves
        ) {
          AsyncStorage.setItem(`${i}${i + 1}`, moves.toString())
        }
      }

      // if (
      //   dimensions.height === 8 &&
      //   dimensions.width === 7 &&
      //   this.time_7X8 > this.props.completedTime.toString()
      // ) {
      //   AsyncStorage.setItem(
      //     'sevenEightTime',
      //     this.props.completedTime.toString()
      //   )
      // }
    } catch (error) {}
  }

  render() {
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
          onPress={this.seeStats()}
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
    won: state.won,
    completedTime: state.completedTime
  }
}

export default connect(mapstate)(youWon)
