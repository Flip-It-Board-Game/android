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

class button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bool: true
    }
    this.toggleColor = this.toggleColor.bind(this)
  }

  toggleColor() {
    this.setState({ bool: !this.state.bool })
  }

  render() {
    return (
      <View>
        <Button transparent light onPress={this.toggleColor}>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: `${this.state.bool ? 'black' : 'white'}`,
              borderWidth: 1,
              borderColor: 'orange'
            }}
          />
        </Button>
      </View>
    )
  }
}

export default button
