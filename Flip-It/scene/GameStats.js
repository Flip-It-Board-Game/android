import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {StyleSheet} from 'react-native';

export default class GameStats extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Container style={styles.container} >
          <Header />
          <Content>
            <Button rounded light>
              <Text>Light</Text>
            </Button>
            <Button rounded>
              <Text>Primary</Text>
            </Button>
            <Button rounded success>
              <Text>Success</Text>
            </Button>
            <Button rounded info>
              <Text>Info</Text>
            </Button>
            <Button rounded warning>
              <Text>Warning</Text>
            </Button>
            <Button rounded danger>
              <Text>Danger</Text>
            </Button>
            <Button rounded dark>
              <Text>Dark</Text>
            </Button>
          </Content>
        </Container>
      );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  }
});
