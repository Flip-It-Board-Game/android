import React, { Component } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import store, { setBoard, setDimensions } from '../components/store/store'
import GameScreen from './GameScreen'

class Menu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let styles = StyleSheet.create({
      container: {
        justifyContent: 'center'
      }
    })
    let buttonArr = []
    for (let i = 2; i < 8; i++) {
      buttonArr.push(
        <Button
          title={`Level ${i - 1}`}
          onPress={() => {
            store.dispatch(setBoard({ width: i, height: i }))
            store.dispatch(setDimensions({ width: i, height: i }))
            this.props.navigation.navigate('GameScreen')
          }}
        >
          <Text>
            {'  '}
            {i} X {i}
            {'  '}
          </Text>
        </Button>
      )
    }
    return (
      <View style={styles.container}>
        <Text>{'\n'}</Text>
        {buttonArr.map(button => button)}
        <Text>{'\n'}</Text>
      </View>
    )
  }
}

// const mapstate = state => {
//   return {
//     bool: state.bool,
//     dimensions: state.dimensions
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     setBoard: board => dispatch(setBoard(board)),
//     setDimensions: board => dispatch(setDimensions(board))
//   }
// }

export default Menu
