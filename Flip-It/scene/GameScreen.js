import { StyleSheet, TabNavigator, View, Text } from 'react-native';
import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import Grid from '../components/grid';
import store from '../components/store/store';
import {
  Container, Header, Content, Footer, FooterTab, Button, Icon,
  Badge
} from 'native-base';

class GameScreen extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>

          <Content>
            <View>
              <Text>Counter Placeholder</Text>
              <Grid />
            </View>
          </Content>
          <Footer>
            <FooterTab>
              <Button badge vertical>
               
                <Icon name="apps" />
                <Text>Back To Game</Text>
              </Button>
              <Button active badge vertical>
                <Badge ><Text>51</Text></Badge>
                <Icon active name="chatbubbles" />
                <Text>Chat</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </Provider>
    );
  }
}

export default GameScreen

// const mapstate = state => {
//   return {
//     numMoves: state.numMoves
//   };
// };
// export default connect(mapstate)(GameScreen);

