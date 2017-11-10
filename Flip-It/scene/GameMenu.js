import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

class GameMenu extends Component {
  render() {
    return (
          <View style={styles.container} >
            <Button
              title="Start"
              color="#841584"
            />
            <Button
              title="Level Select"
              color="#841584"
            />
            <Button
              title="My Awesome Stats"
              color="#841584"
            />
            <Button
              title="Settings"
              color="#841584"
            />
          </View>
    );
  }
}

let styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C0C0C0',
      justifyContent: 'center',
     }
  
  });

export default GameMenu