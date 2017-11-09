import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell
} from 'react-native-table-component'
import { Container, Header, Content, Button, Text } from 'native-base'
import Buttons from './buttons'

const styles = StyleSheet.create({
  head: { height: 40, backgroundColor: '#f1f8ff' },
  TopBuffer: { height: 300, backgroundColor: 'white', borderWidth: 0 },
  text: { marginLeft: 5 },
  row: { height: 50, width: 200 },
  app: { justifyContent: 'center', alignItems: 'center' }
})

export default class tableView extends Component {
  constructor(props) {
    super(props)
    this.test = true
  }
  render() {
    this.test = true
    const rowNum = 4
    const colNum = 4
    let num = rowNum * colNum

    let rowButtons = []
    let tableData = []
    for (let i = 0; i < num; i++) {
      rowButtons.push(<Buttons iNum={i} />)
      if ((i + 1) % rowNum === 0) {
        tableData.push(rowButtons)
        rowButtons = []
      }
    }

    const blankData = []
    return (
      <View style={styles.app}>
        <Table style={styles.table}>
          <Row style={styles.TopBuffer} data={blankData} />
          <Rows
            key={'i'}
            data={tableData}
            style={styles.row}
            textStyle={styles.text}
          />
        </Table>
      </View>
    )
  }
}
