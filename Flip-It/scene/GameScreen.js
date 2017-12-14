import { StyleSheet, View, Text, TabNavigator } from 'react-native'
import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import Grid from '../components/grid'
import store from '../components/store/store'
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Badge
} from 'native-base'

class GameScreen extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Content>
            <View>
              <Grid />
            </View>
          </Content>
        </Container>
      </Provider>
    )
  }
}

export default GameScreen

// const mapstate = state => {
//   return {
//     numMoves: state.numMoves
//   };
// };
// export default connect(mapstate)(GameScreen);
