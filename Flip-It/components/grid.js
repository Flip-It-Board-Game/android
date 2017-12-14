import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Table, Rows } from 'react-native-table-component'
import Buttons from './buttons'
import { connect } from 'react-redux'
import Reset from './reset'
import Timer from './timer2'
import YouWon from './youWon'
import Reveal from './reveal'
import { setCount } from './store/store'

class Grid extends Component {
  constructor(props) {
    super(props)
    this.num = 0
  }

  componentWillMount() {
    this.props.setCount({ count: 0 })
  }

  render() {
    //Renders table based on user input
    const width = this.props.dimensions && this.props.dimensions.width
    const height = this.props.dimensions && this.props.dimensions.height
    let num = width * height
    let rowButtons = []
    let tableData = []
    for (let i = 0; i < num; i++) {
      rowButtons.push(<Buttons iNum={i} />)
      if ((i + 1) % width === 0) {
        tableData.push(rowButtons)
        rowButtons = []
      }
    }
    const rowWidth = width * 50 + width * 2
    const styles = StyleSheet.create({
      TopBuffer: { height: 300, backgroundColor: 'white', borderWidth: 0 },
      text: { marginLeft: 5 },
      row: { height: 50, width: rowWidth },
      top: { height: 180, width: 300 },
      app: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
      }
    })
    const datas = [
      [
        <View>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 150,
              marginTop: 150
            }}
            key="moveCount"
          >
            Number of Moves: {this.props.count.count}
          </Text>
        </View>
      ]
    ]
    return (
      <View style={{ backgroundColor: 'white' }}>
        {this.props && this.props.bool.indexOf(true) === -1 ? (
          <View>
            <Text
              style={{
                fontSize: 65,
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              You Won!
            </Text>
            <YouWon />
            <Reset />
          </View>
        ) : (
          <View style={styles.app}>
            <Table
              borderStyle={{ height: 79, borderWidth: 0, borderColor: 'white' }}
            >
              <Rows data={datas} style={styles.top} textStyle={styles.text} />
            </Table>
            <Table borderStyle={{ borderWidth: 0, borderColor: 'white' }}>
              <Rows
                data={tableData}
                style={styles.row}
                textStyle={styles.text}
              />
            </Table>
            <Text style={{ fontSize: 5 }}>{'\n'}</Text>

            <Timer />
            <Reset />
          </View>
        )}
      </View>
    )
  }
}

const mapState = state => {
  return {
    bool: state.bool,
    dimensions: state.dimensions,
    count: state.count,
    won: state.won
  }
}

const mapDispatch = dispatch => {
  return {
    setCount: count => dispatch(setCount(count))
  }
}

export default connect(mapState, mapDispatch)(Grid)
