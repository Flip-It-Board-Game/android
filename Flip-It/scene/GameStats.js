//
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

export default class GameStats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: 'Bob',
      displayStats: false
    }
    this.seeStats = this.seeStats.bind(this)
  }

  seeStats = async () => {
    try {
      //move load
      this.moves_2X2 = await AsyncStorage.getItem('twoTwo')
      this.moves_2X3 = await AsyncStorage.getItem('twoThree')
      this.moves_3X3 = await AsyncStorage.getItem('threeThree')
      this.moves_3X4 = await AsyncStorage.getItem('threeFour')
      this.moves_4X4 = await AsyncStorage.getItem('fourFour')
      this.moves_4X5 = await AsyncStorage.getItem('fourFive')
      this.moves_5X5 = await AsyncStorage.getItem('fiveFive')
      this.moves_5X6 = await AsyncStorage.getItem('fiveSix')
      this.moves_6X6 = await AsyncStorage.getItem('sixSix')
      this.moves_6X7 = await AsyncStorage.getItem('sixSeven')
      this.moves_7X7 = await AsyncStorage.getItem('sevenSeven')
      this.moves_7X8 = await AsyncStorage.getItem('sevenEight')
      //time load
      this.time_2X2 = await AsyncStorage.getItem('twoTwoTime')
      this.time_2X3 = await AsyncStorage.getItem('twoThreeTime')
      this.time_3X3 = await AsyncStorage.getItem('threeThreeTime')
      this.time_3X4 = await AsyncStorage.getItem('threeFourTime')
      this.time_4X4 = await AsyncStorage.getItem('fourFourTime')
      this.time_4X5 = await AsyncStorage.getItem('fourFiveTime')
      this.time_5X5 = await AsyncStorage.getItem('fiveFiveTime')
      this.time_5X6 = await AsyncStorage.getItem('fiveSixTime')
      this.time_6X6 = await AsyncStorage.getItem('sixSixTime')
      this.time_6X7 = await AsyncStorage.getItem('sixSevenTime')
      this.time_7X7 = await AsyncStorage.getItem('sevenSevenTime')
      this.time_7X8 = await AsyncStorage.getItem('sevenEightTime')
      //show stats toggle
      this.setState({ displayStats: !this.state.displayStats })
    } catch (error) {
      alert(error)
    }
  }

  render() {
    let statArray = []
    for (let i = 2; i < 8; i++) {
      statArray.push(
        <View>
          <Row style={{ height: 30 }}>
            <Col>
              <Text>
                {i}X{i}
              </Text>
            </Col>
            <Col>
              <Text>{eval(`this.moves_${i}X${i}`) || 'Incomplete'}</Text>
            </Col>
            <Col>
              <Text>{eval(`this.time_${i}X${i}`) || 'Incomplete'}</Text>
            </Col>
          </Row>
          <Row style={{ height: 30 }}>
            <Col>
              <Text>
                {i}X{i + 1}
              </Text>
            </Col>
            <Col>
              <Text>{eval(`this.moves_${i}X${i + 1}`) || 'Incomplete'}</Text>
            </Col>
            <Col>
              <Text>{eval(`this.time_${i}X${i + 1}`) || 'Incomplete'}</Text>
            </Col>
          </Row>
        </View>
      )
    }
    return (
      <Container style={styles.container}>
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
          <Button onPress={this.seeStats}>
            <Text>See Stats</Text>
          </Button>
          {this.state.displayStats ? (
            <Grid>
              <Row style={{ height: 30 }}>
                <Col>
                  <Text>Board</Text>
                </Col>
                <Col>
                  <Text># Moves</Text>
                </Col>
                <Col>
                  <Text>Time</Text>
                </Col>
              </Row>
              {statArray.map(ele => ele)}
            </Grid>
          ) : (
            <View />
          )}
        </Content>
      </Container>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  }
})
