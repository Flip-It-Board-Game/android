import React, { Component } from 'react';
import { AppRegistry, Button, Text, View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation'
import GameMenu from './scene/GameMenu'
import HomeComp  from './scene/Home'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  }

  render() {
    return (
    <View style={styles.container}>
              <Text> Lets Play! </Text>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('GameMenu')}>
                <Image
                  style={styles.button}
                  source={require('./wei-chi-29466_1280.jpg')}
                />
              </TouchableHighlight> 

          {/* <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Press Me"
              color="#841584"
            />
          </View> */}
        

      </View>

    );
  }
}

const ModalStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  GameMenu: {
    screen: GameMenu,
  },
}); 

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   },
   backdrop: {
    resizeMode: 'cover'
  },

});

export default ModalStack;
// AppRegistry.registerComponent('Flip-it', () => MyHomeScreen);