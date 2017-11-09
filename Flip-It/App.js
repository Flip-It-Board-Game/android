import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'
import { Container, Header, Content, Button, Text } from 'native-base'

export default class JustifyContentBasics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bool: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ bool: !this.state.bool })
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {['1', '2', '3', '4'].map(val => {
          return (
            <View key={val}>
              {['1', '2', '3', '4'].map(val2 => {
                let num = val2 * val
                let colorSq
                this.state.bool ? (colorSq = 'black') : (colorSq = 'white')
                return (
                  <Button
                    transparent
                    light
                    key={val2 * val}
                    onPress={() => this.handleClick({ num })}
                  >
                    <View
                      style={{
                        width: 50,
                        height: 50,
                        backgroundColor: colorSq,
                        borderRadius: 4,
                        borderWidth: 1,
                        borderColor: 'orange'
                      }}
                    />
                  </Button>
                )
              })}
            </View>
          )
        })}
      </View>
    )
  }
}
