import React, { Component } from 'react'
import { View, StyleSheet, Text, Animated, Image, Easing } from 'react-native'
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
          source={require('../CartRuby.png')}
        />

        <Text>{'\n'}</Text>
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
