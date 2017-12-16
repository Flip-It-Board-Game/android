import React, { Component } from 'react'
import { View, TouchableHighlight, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { newArray, setCount, setWinner } from './store/store'

class Buttons extends Component {
  constructor(props) {
    super(props)
    this.toggleColor = this.toggleColor.bind(this)
  }

  toggleColor() {
    let countNum = this.props && this.props.count.count
    //sets count in store
    this.props.setCount({ count: countNum + 1 })
    //sets width and height to values set in store, sets totalSquares to these numbers multiplied
    this.width = this.props.dimensions && this.props.dimensions.width
    this.height = this.props.dimensions && this.props.dimensions.height
    let totalSquares = this.width * this.height
    //sets iNum to index number of button (passed in from grid)
    const iNum = this.props.iNum
    //creates temp array to edit
    let tempArr = this.props.bool.slice()
    tempArr.splice(iNum, 1, !this.props.bool[iNum])
    //if statements that make changes to state, changing color on grid
    if (iNum - 1 >= 0 && iNum % this.width !== 0) {
      let oneBeforeNum = iNum - 1
      tempArr.splice(oneBeforeNum, 1, !this.props.bool[oneBeforeNum])
      // console.log('iNum - 1 >= 0 && iNum % width !== 0', iNum)
    }
    if (iNum + 1 !== this.width && (iNum + 1) % this.width !== 0) {
      let oneAfterNum = iNum + 1
      tempArr.splice(oneAfterNum, 1, !this.props.bool[oneAfterNum])
      // console.log('iNum + 1 !== width && (iNum + 1) % width !== 0', iNum)
    }
    if (iNum < totalSquares) {
      if (iNum - this.width >= 0) {
        let widthLessNum = iNum - this.width
        tempArr.splice(widthLessNum, 1, !this.props.bool[widthLessNum])
        // console.log('iNum < totalSquares', iNum)
      }
    }
    if (iNum < totalSquares) {
      let widthPlusNum = iNum + this.width
      if (widthPlusNum < totalSquares) {
        tempArr.splice(widthPlusNum, 1, !this.props.bool[widthPlusNum])
        // console.log('iNum < totalSquares', iNum)
      }
    }
    this.props.newArray(tempArr)
  }

  render() {
    const displayBool = !!this.props.bool[this.props.iNum]
    const styles = StyleSheet.create({
      image: {
        width: this.props.size,
        height: this.props.size
      }
    })
    return (
      <View>
        <TouchableHighlight onPress={this.toggleColor}>
          {displayBool ? (
            <Image
              style={styles.image}
              source={require('../images/santahat2.png')}
            />
          ) : (
            <Image
              style={styles.image}
              source={require('../images/present.png')}
            />
          )}
        </TouchableHighlight>
      </View>
    )
  }
}

const mapstate = state => {
  return {
    bool: state.bool,
    dimensions: state.dimensions,
    count: state.count
  }
}

const mapDispatch = dispatch => {
  return {
    newArray: array => dispatch(newArray(array)),
    setCount: num => dispatch(setCount(num)),
    setWinner: won => dispatch(setWinner(won))
  }
}

export default connect(mapstate, mapDispatch)(Buttons)
