import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { Button } from 'native-base'
import { connect } from 'react-redux'
import { reset, setBoard, setCount } from './store/store'

class Reset extends Component {
  constructor(props) {
    super(props)
    this.displayData = this.displayData.bind(this)
  }

  displayData = async () => {
    try {
      let user = await AsyncStorage.getItem('key_User')
      let time = await AsyncStorage.getItem('key_time')
      let moves = await AsyncStorage.getItem('key_bestMoves')
      alert(user + ' last completed this level in ' + moves + ' moves.')
    } catch (error) {
      alert(error)
    }
  }

  render() {
    return (
      <View>
        <Button
          transparent
          light
          onPress={() => {
            this.displayData()
          }}
        >
          <Text
            style={{
              fontFamily: 'Cochin',
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'center'
            }}
            key="moveCount"
          >
            Display Stats
          </Text>
        </Button>
      </View>
    )
  }
}

const mapState = state => {
  return {
    dimensions: state.dimensions,
    count: state.count
  }
}

const mapDispatch = dispatch => {
  return {
    reset: () => dispatch(reset()),
    setBoard: board => dispatch(setBoard(board)),
    setCount: num => dispatch(setCount(num))
  }
}

export default connect(mapState, mapDispatch)(Reset)
