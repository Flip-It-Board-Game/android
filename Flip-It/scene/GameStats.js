import React, { Component } from 'react'
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Table,
  Rows
} from 'native-base'
import { View, StyleSheet, Image, AsyncStorage } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
const Dimensions = require('Dimensions')
let { height, width } = Dimensions.get('window')
let tHeight = height
let tWidth = width

export default class GameStats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: 'Bob',
      displayStats: false
    }
    this.limitPush = 0
    this.seeStats = this.seeStats.bind(this)
    this.statArray = [
      <Row
        key={'array'}
        style={{ backgroundColor: 'white', borderWidth: 2, height: 30 }}
      >
        <Col style={{ borderWidth: 1 }}>
          <Text style={{ alignText: 'center' }}>Board</Text>
        </Col>
        <Col style={{ borderWidth: 1 }}>
          <Text># Moves</Text>
        </Col>
        <Col style={{ borderWidth: 1 }}>
          <Text>Time</Text>
        </Col>
      </Row>
    ]
  }

  seeStats = async () => {
    try {
      for (let i = 2; i < 8; i++) {
        let moveStat = await AsyncStorage.getItem(`${i}${i}`)
        let move_2Stat = await AsyncStorage.getItem(`${i}${i + 1}`)
        let timeStat = await AsyncStorage.getItem(`${i}${i}Time`)
        let time_2Stat = await AsyncStorage.getItem(`${i}${i + 1}Time`)
        if (this.limitPush < 1) {
          this.statArray.push(
            <View key={i}>
              <Row
                style={{ backgroundColor: 'white', borderWidth: 2, height: 30 }}
              >
                <Col style={{ borderWidth: 1 }}>
                  <Text>
                    {i}X{i}
                  </Text>
                </Col>
                <Col style={{ borderWidth: 1 }}>
                  <Text>{moveStat || 'N/A'}</Text>
                </Col>
                <Col style={{ borderWidth: 1 }}>
                  <Text>{timeStat}</Text>
                </Col>
              </Row>
              <Row
                style={{ backgroundColor: 'white', borderWidth: 2, height: 30 }}
              >
                <Col style={{ borderWidth: 1 }}>
                  <Text>
                    {i}X{i + 1}
                  </Text>
                </Col>
                <Col style={{ borderWidth: 1 }}>
                  <Text>{move_2Stat || 'N/A'}</Text>
                </Col>
                <Col style={{ borderWidth: 1 }}>
                  <Text>{time_2Stat}</Text>
                </Col>
              </Row>
            </View>
          )
        }
      }
      this.limitPush++
      this.setState({ displayStats: !this.state.displayStats })
    } catch (error) {
      alert(error)
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Image
          style={{
            width: tWidth,
            height: tHeight
          }}
          source={require('../images/snowman.jpg')}
        >
          <Image
            style={{
              width: tWidth,
              height: tHeight
            }}
            source={require('../images/snowgif.gif')}
          >
            <Header>
              <Text>Profile</Text>
            </Header>
            <Content>
              <Grid>
                <Col style={{ backgroundColor: '#635DB7', height: 100 }}>
                  <Text>{this.state.userName}</Text>
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../images/user.jpg')}
                  />
                </Col>
                <Col style={{ backgroundColor: '#00CE9F', height: 100 }} />
              </Grid>
              <Button transparent light onPress={this.seeStats}>
                {this.state.displayStats ? (
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '900',
                      color: 'black',
                      backgroundColor: 'rgba(0,0,0,0)',
                      borderWidth: 1,
                      paddingLeft: 25,
                      paddingRight: 23,
                      paddingTop: 3,
                      borderColor: 'black',
                      width: 170,
                      textAlign: 'center'
                    }}
                  >
                    Hide Stats
                  </Text>
                ) : (
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '900',
                      color: 'black',
                      backgroundColor: 'rgba(0,0,0,0)',
                      borderWidth: 1,
                      paddingLeft: 25,
                      paddingRight: 23,
                      paddingTop: 3,
                      borderColor: 'black',
                      width: 170,
                      textAlign: 'center'
                    }}
                  >
                    Show Stats
                  </Text>
                )}
              </Button>
              {this.state.displayStats ? (
                <Grid>{this.statArray.map(ele => ele)}</Grid>
              ) : (
                <View />
              )}
            </Content>
          </Image>
        </Image>
      </Container>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
