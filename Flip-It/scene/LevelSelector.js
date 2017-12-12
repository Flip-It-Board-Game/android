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
        marginTop: 40,
        justifyContent: 'center'
      }
    })
    let buttonArr = []
    for (let i = 2; i < 8; i++) {
      buttonArr.push(
        <View>
          <Button
            title={`${i} X ${i}`}
            onPress={() => {
              store.dispatch(setBoard({ width: i, height: i }))
              store.dispatch(setDimensions({ width: i, height: i }))
              this.props.navigation.navigate('GameScreen')
            }}
          />
          <Button
            title={`${i} X ${i + 1}`}
            onPress={() => {
              store.dispatch(setBoard({ width: i, height: i + 1 }))
              store.dispatch(setDimensions({ width: i, height: i + 1 }))
              this.props.navigation.navigate('GameScreen')
            }}
          />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: '#1a8cff',
            textAlign: 'center',
            marginBottom: 15,
            marginTop: 15,
            fontSize: 25
          }}
        >
          Select Layout
        </Text>
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
