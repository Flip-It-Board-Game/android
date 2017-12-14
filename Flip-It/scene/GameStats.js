// import React, { Component } from 'react';
// import { Container, Header, Content, Button, Text } from 'native-base';
// import {StyleSheet, Image} from 'react-native';
// import { Col, Row, Grid } from 'react-native-easy-grid';

// export default class GameStats extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         userName: "Bob"
//     };
//   }

//   render() {
//     return (
//         <Container style={styles.container} >
//           <Header><Text>Profile</Text></Header>
//           <Content>
//           <Grid>
//             <Col style={{ backgroundColor: '#635DB7', height: 200 }}>
//                 <Text>{this.state.userName}</Text>
//                 <Image
//                 style={{width: 50, height: 50}}
//                 source={require('../images/user.jpg')}>
//                 </Image>
//             </Col>
//             <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
//           </Grid>

//             <Button rounded light>
//               <Text>Time Played</Text>
//             </Button>
//             <Button rounded>
//               <Text>Number of Hints Used</Text>
//             </Button>
//             <Button rounded success>
//               <Text>Skins</Text>
//             </Button>
//             <Button rounded info>
//               <Text>Average Time of Completion</Text>
//             </Button>
//             <Button rounded warning>
//               <Text>Warning</Text>
//             </Button>
//             <Button rounded danger>
//               <Text>Danger</Text>
//             </Button>
//             <Button rounded dark>
//               <Text>Dark</Text>
//             </Button>
//           </Content>
//         </Container>
//       );
//   }
// }

// let styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     justifyContent: 'center'
//   }
// });

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
      this.moves_2X2 = await AsyncStorage.getItem('22')
      this.moves_2X3 = await AsyncStorage.getItem('23')
      this.moves_3X3 = await AsyncStorage.getItem('33')
      this.moves_3X4 = await AsyncStorage.getItem('34')
      this.moves_4X4 = await AsyncStorage.getItem('44')
      this.moves_4X5 = await AsyncStorage.getItem('45')
      this.moves_5X5 = await AsyncStorage.getItem('55')
      this.moves_5X6 = await AsyncStorage.getItem('56')
      this.moves_6X6 = await AsyncStorage.getItem('66')
      this.moves_6X7 = await AsyncStorage.getItem('67')
      this.moves_7X7 = await AsyncStorage.getItem('77')
      this.moves_7X8 = await AsyncStorage.getItem('78')
      //time load
      this.time_2X2 = await AsyncStorage.getItem('22Time')
      this.time_2X3 = await AsyncStorage.getItem('23Time')
      this.time_3X3 = await AsyncStorage.getItem('33Time')
      this.time_3X4 = await AsyncStorage.getItem('34Time')
      this.time_4X4 = await AsyncStorage.getItem('44Time')
      this.time_4X5 = await AsyncStorage.getItem('45Time')
      this.time_5X5 = await AsyncStorage.getItem('55Time')
      this.time_5X6 = await AsyncStorage.getItem('56Time')
      this.time_6X6 = await AsyncStorage.getItem('66Time')
      this.time_6X7 = await AsyncStorage.getItem('67Time')
      this.time_7X7 = await AsyncStorage.getItem('77Time')
      this.time_7X8 = await AsyncStorage.getItem('78Time')
      console.log(this.time_2X3, 'LSDFSDFDSFSDLFSDFLJSDJLFSDJLFJLSFLJSDLFJ')
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
              <Text>{eval(`this.moves_${i}X${i}`) || 'N/A'}</Text>
            </Col>
            <Col>
              <Text>{eval(`this.time_${i}X${i}`)}</Text>
            </Col>
          </Row>
          <Row style={{ height: 30 }}>
            <Col>
              <Text>
                {i}X{i + 1}
              </Text>
            </Col>
            <Col>
              <Text>{eval(`this.moves_${i}X${i + 1}`) || 'N/A'}</Text>
            </Col>
            <Col>
              <Text>{eval(`this.time_${i}X${i + 1}`)}</Text>
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
              <Row style={{ height: 31 }}>
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
