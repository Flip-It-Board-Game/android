import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { Button } from 'native-base'
import { connect } from 'react-redux'
import { reset, setBoard, setCount } from './store/store'

class Reset extends Component {
  constructor(props) {
    super(props)
    this.saveData = this.saveData.bind(this)
  }

  saveData() {
    let moves = this.props && this.props.count.count
    AsyncStorage.setItem('key_bestMoves', moves.toString())
  }

  render() {
    return (
      <View>
        <Button
          transparent
          light
          onPress={() => {
            this.props.setBoard({
              width: this.props.dimensions.width,
              height: this.props.dimensions.height
            })
            this.props.setCount({ count: 0 })
            this.saveData()
          }}
        >
          <Text
            style={{
              fontFamily: 'Cochin',
              fontSize: 27,
              fontWeight: 'bold',
              textAlign: 'center'
            }}
            key="moveCount"
          >
            Reset Board
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
