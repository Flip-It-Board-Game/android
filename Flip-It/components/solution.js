import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'native-base'
import { connect } from 'react-redux'
import { newArray } from './store/store'

const width = 4
const height = 4
const totalSquares = width * height

class Solution extends Component {
  constructor(props) {
    super(props)
    this.toggleColor = this.toggleColor.bind(this)
  }

  toggleColor(iNum) {
    let tempArr = this.props.bool.slice(0)
    tempArr.splice(iNum, 1, !this.props.bool[iNum])
    if (iNum - 1 >= 0 && iNum % width !== 0) {
      let oneBeforeNum = iNum - 1
      tempArr.splice(oneBeforeNum, 1, !this.props.bool[oneBeforeNum])
    }
    if (iNum + 1 !== width && (iNum + 1) % width !== 0) {
      let oneAfterNum = iNum + 1
      tempArr.splice(oneAfterNum, 1, !this.props.bool[oneAfterNum])
    }
    if (iNum < totalSquares) {
      let widthLessNum = iNum - width
      tempArr.splice(widthLessNum, 1, !this.props.bool[widthLessNum])
    }
    if (iNum < totalSquares) {
      let widthPlusNum = iNum + width
      tempArr.splice(widthPlusNum, 1, !this.props.bool[widthPlusNum])
    }
    this.props.newArray(tempArr)
  }

  render() {
    return (
      <View>
        <Button
          transparent
          light
          onPress={() => {
            if (width === 4 && height === 4) {
              this.toggleColor(1)
              setTimeout(() => this.toggleColor(14), 1500)
              setTimeout(() => this.toggleColor(7), 3000)
              setTimeout(() => this.toggleColor(8), 4500)
            }
            if (width === 5 && height === 5) {
              this.toggleColor(0)
              setTimeout(() => this.toggleColor(1), 1500)
              setTimeout(() => this.toggleColor(5), 3000)
              setTimeout(() => this.toggleColor(6), 4500)
              setTimeout(() => this.toggleColor(8), 6000)
              setTimeout(() => this.toggleColor(9), 7500)
              setTimeout(() => this.toggleColor(12), 9000)
              setTimeout(() => this.toggleColor(13), 10500)
              setTimeout(() => this.toggleColor(14), 12000)
              setTimeout(() => this.toggleColor(16), 13500)
              setTimeout(() => this.toggleColor(17), 15000)
              setTimeout(() => this.toggleColor(18), 16500)
              setTimeout(() => this.toggleColor(21), 18000)
              setTimeout(() => this.toggleColor(22), 19500)
              setTimeout(() => this.toggleColor(24), 21000)
            }
          }}
        >
          <Text
            style={{
              width: width * 50,
              height: 50,
              backgroundColor: 'blue',
              borderWidth: 1,
              borderColor: 'white'
            }}
          >
            See Solution
          </Text>
        </Button>
      </View>
    )
  }
}

const mapstate = state => {
  return {
    bool: state.bool
  }
}

const mapDispatch = dispatch => {
  return {
    newArray: array => dispatch(newArray(array))
  }
}

export default connect(mapstate, mapDispatch)(Solution)

// if props i === j = flip color
