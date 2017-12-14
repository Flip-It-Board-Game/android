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
    this.limitPush = 0
    this.seeStats = this.seeStats.bind(this)
    this.statArray = [
      <Row key={'array'} style={{ height: 31 }}>
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
              <Row style={{ height: 30 }}>
                <Col>
                  <Text>
                    {i}X{i}
                  </Text>
                </Col>
                <Col>
                  <Text>{moveStat || 'N/A'}</Text>
                </Col>
                <Col>
                  <Text>{timeStat}</Text>
                </Col>
              </Row>
              <Row style={{ height: 30 }}>
                <Col>
                  <Text>
                    {i}X{i + 1}
                  </Text>
                </Col>
                <Col>
                  <Text>{move_2Stat || 'N/A'}</Text>
                </Col>
                <Col>
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
            <Grid>{this.statArray.map(ele => ele)}</Grid>
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
