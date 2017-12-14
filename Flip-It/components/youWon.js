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
      //move load
      this.moves_2X2 = await AsyncStorage.getItem('twoTwo')
      this.moves_2X3 = await AsyncStorage.getItem('twoThree')
      this.moves_3X3 = await AsyncStorage.getItem('threeThree')
      this.moves_3X4 = await AsyncStorage.getItem('threeFour')
      this.moves_4X4 = await AsyncStorage.getItem('fourFour')
      this.moves_4X5 = await AsyncStorage.getItem('fourFive')
      this.moves_5X5 = await AsyncStorage.getItem('fiveFive')
      this.moves_5X6 = await AsyncStorage.getItem('fiveSix')
      this.moves_6X6 = await AsyncStorage.getItem('sixSix')
      this.moves_6X7 = await AsyncStorage.getItem('sixSeven')
      this.moves_7X7 = await AsyncStorage.getItem('sevenSeven')
      this.moves_7X8 = await AsyncStorage.getItem('sevenEight')
      //time load
      this.time_2X2 = await AsyncStorage.getItem('twoTwoTime')
      this.time_2X3 = await AsyncStorage.getItem('twoThreeTime')
      this.time_3X3 = await AsyncStorage.getItem('threeThreeTime')
      this.time_3X4 = await AsyncStorage.getItem('threeFourTime')
      this.time_4X4 = await AsyncStorage.getItem('fourFourTime')
      this.time_4X5 = await AsyncStorage.getItem('fourFiveTime')
      this.time_5X5 = await AsyncStorage.getItem('fiveFiveTime')
      this.time_5X6 = await AsyncStorage.getItem('fiveSixTime')
      this.time_6X6 = await AsyncStorage.getItem('sixSixTime')
      this.time_6X7 = await AsyncStorage.getItem('sixSevenTime')
      this.time_7X7 = await AsyncStorage.getItem('sevenSevenTime')
      this.time_7X8 = await AsyncStorage.getItem('sevenEightTime')
      //show stats toggle
      //Save Move Count
      if (
        dimensions.height === 2 &&
        dimensions.width === 2 &&
        this.moves_2X2 > moves
      ) {
        AsyncStorage.setItem('twoTwo', moves.toString())
      }
      if (
        dimensions.height === 3 &&
        dimensions.width === 2 &&
        this.moves_2X3 > moves
      ) {
        AsyncStorage.setItem('twoThree', moves.toString())
      }
      if (
        dimensions.height === 3 &&
        dimensions.width === 3 &&
        this.moves_3X3 > moves
      ) {
        AsyncStorage.setItem('threeThree', moves.toString())
      }
      if (
        dimensions.height === 4 &&
        dimensions.width === 3 &&
        this.moves_3X4 > moves
      ) {
        AsyncStorage.setItem('threeFour', moves.toString())
      }
      if (
        dimensions.height === 4 &&
        dimensions.width === 4 &&
        this.moves_4X4 > moves
      ) {
        AsyncStorage.setItem('fourFour', moves.toString())
      }
      if (
        dimensions.height === 5 &&
        dimensions.width === 4 &&
        this.moves_4X5 > moves
      ) {
        AsyncStorage.setItem('fourFive', moves.toString())
      }
      if (
        dimensions.height === 5 &&
        dimensions.width === 5 &&
        this.moves_5X5 > moves
      ) {
        AsyncStorage.setItem('fiveFive', moves.toString())
      }
      if (
        dimensions.height === 6 &&
        dimensions.width === 5 &&
        this.moves_5X6 > moves
      ) {
        AsyncStorage.setItem('fiveSix', moves.toString())
      }
      if (
        dimensions.height === 6 &&
        dimensions.width === 6 &&
        this.moves_6X6 > moves
      ) {
        AsyncStorage.setItem('sixSix', moves.toString())
      }
      if (
        dimensions.height === 7 &&
        dimensions.width === 6 &&
        this.moves_6X7 > moves
      ) {
        AsyncStorage.setItem('sixSeven', moves.toString())
      }
      if (
        dimensions.height === 7 &&
        dimensions.width === 7 &&
        this.moves_7X7 > moves
      ) {
        AsyncStorage.setItem('sevenSeven', moves.toString())
      }
      if (
        dimensions.height === 8 &&
        dimensions.width === 7 &&
        this.moves_7X8 > moves
      ) {
        AsyncStorage.setItem('sevenEight', moves.toString())
      }
      //Save Completion Time
      if (
        dimensions.height === 2 &&
        dimensions.width === 2 &&
        this.time_2X2 > this.props.completedTime.toString()
      ) {
        AsyncStorage.setItem('twoTwoTime', this.props.completedTime.toString())
      }
      if (
        dimensions.height === 3 &&
        dimensions.width === 2 &&
        this.time_2X3 > this.props.completedTime.toString()
      ) {
        AsyncStorage.setItem(
          'twoThreeTime',
          this.props.completedTime.toString()
        )
      }
      if (
        dimensions.height === 3 &&
        dimensions.width === 3 &&
        this.time_3X3 > this.props.completedTime.toString()
      ) {
        AsyncStorage.setItem(
          'threeThreeTime',
          this.props.completedTime.toString()
        )
      }
      if (
        dimensions.height === 4 &&
        dimensions.width === 3 &&
        this.time_3X4 > this.props.completedTime.toString()
      ) {
        AsyncStorage.setItem(
          'threeFourTime',
          this.props.completedTime.toString()
        )
      }
      if (
        dimensions.height === 4 &&
        dimensions.width === 4 &&
        this.time_4X4 > this.props.completedTime.toString()
      ) {
        AsyncStorage.setItem(
          'fourFourTime',
          this.props.completedTime.toString()
        )
      }
      if (
        dimensions.height === 5 &&
        dimensions.width === 4 &&
        this.time_4X5 > this.props.completedTime.toString()
      ) {
        AsyncStorage.setItem(
          'fourFiveTime',
          this.props.completedTime.toString()
        )
      }
      if (
        dimensions.height === 5 &&
        dimensions.width === 5 &&
        this.time_5X5 > this.props.completedTime.toString()
      ) {
        AsyncStorage.setItem(
          'fiveFiveTime',
          this.props.completedTime.toString()
        )
      }
      if (
        dimensions.height === 6 &&
        dimensions.width === 5 &&
        this.time_5X6 > this.props.completedTime.toString()
      ) {
        AsyncStorage.setItem('fiveSixTime', this.props.completedTime.toString())
      }
      if (
        dimensions.height === 6 &&
        dimensions.width === 6 &&
        this.time_6X6 > this.props.completedTime.toString()
      ) {
        AsyncStorage.setItem('sixSixTime', this.props.completedTime.toString())
      }
      if (
        dimensions.height === 7 &&
        dimensions.width === 6 &&
        this.time_6X7 > this.props.completedTime.toString()
      ) {
        AsyncStorage.setItem(
          'sixSevenTime',
          this.props.completedTime.toString()
        )
      }
      if (
        dimensions.height === 7 &&
        dimensions.width === 7 &&
        this.time_7X7 > this.props.completedTime.toString()
      ) {
        AsyncStorage.setItem(
          'sevenSevenTime',
          this.props.completedTime.toString()
        )
      }
      if (
        dimensions.height === 8 &&
        dimensions.width === 7 &&
        this.time_7X8 > this.props.completedTime.toString()
      ) {
        AsyncStorage.setItem(
          'sevenEightTime',
          this.props.completedTime.toString()
        )
      }
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
