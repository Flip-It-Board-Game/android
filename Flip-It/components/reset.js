import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'native-base'
import { connect } from 'react-redux'
import { reset, setBoard } from './store/store'

const width = 4
const height = 4
const totalSquares = width * height

class Reset extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Button
          light
          onPress={() => {
            this.props.setBoard({
              width: this.props.dimensions.width,
              height: this.props.dimensions.height
            })
          }}
        >
          <Text>Reset Board</Text>
        </Button>
      </View>
    )
  }
}

const mapState = state => {
  return {
    dimensions: state.dimensions
  }
}

const mapDispatch = dispatch => {
  return {
    reset: () => dispatch(reset()),
    setBoard: board => dispatch(setBoard(board))
  }
}

export default connect(mapState, mapDispatch)(Reset)
