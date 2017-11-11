import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'native-base'
import { connect } from 'react-redux'
import { reset } from './store/store'

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
            this.props.reset()
          }}
        >
          <Text
            style={{
              width: width * 50,
              height: 50,
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: 'white'
            }}
          >
            Reset Board
          </Text>
        </Button>
      </View>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    reset: () => dispatch(reset())
  }
}

export default connect(null, mapDispatch)(Reset)
