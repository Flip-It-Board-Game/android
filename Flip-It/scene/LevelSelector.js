import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Button } from 'native-base';
import store, { setBoard, setDimensions } from '../components/store/store';
const Dimensions = require('Dimensions');
let { height, width } = Dimensions.get('window');
let tHeight = height;
let tWidth = width;

class Menu extends Component {
  render() {
    let styles = StyleSheet.create({
      container: {
        justifyContent: 'center'
      }
    });
    let buttonArr = [];
    for (let i = 2; i < 8; i++) {
      buttonArr.push(
        <View>
          <Button
            transparent
            light
            style={{ backgroundColor: 'rgba(0,0,0,0)' }}
            onPress={() => {
              store.dispatch(setBoard({ width: i, height: i }));
              store.dispatch(setDimensions({ width: i, height: i }));
              this.props.navigation.navigate('GameScreen');
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: '900',
                color: 'black',
                backgroundColor: 'rgba(0,0,0,0)',
                borderWidth: 1,
                paddingLeft: 65,
                paddingRight: 63,
                paddingTop: 3,
                borderColor: 'black',
                textAlign: 'center'
              }}
            >
              {i}X{i}
            </Text>
          </Button>
          <Button
            transparent
            light
            onPress={() => {
              store.dispatch(setBoard({ width: i, height: i + 1 }));
              store.dispatch(setDimensions({ width: i, height: i + 1 }));
              this.props.navigation.navigate('GameScreen');
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: '900',
                color: 'black',
                backgroundColor: 'rgba(0,0,0,0)',
                borderWidth: 1,
                paddingLeft: 65,
                paddingRight: 63,
                paddingTop: 3,
                borderColor: 'black',
                textAlign: 'center'
              }}
            >
              {i}X{i + 1}
            </Text>
          </Button>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Image
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: tWidth,
            height: tHeight
          }}
          source={require('../images/snowman.jpg')}
        >
          <Image
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: tWidth,
              height: tHeight
            }}
            source={require('../images/snowgif.gif')}
          >
            {buttonArr.map(button => button)}
            <Text>{'\n'}</Text>
          </Image>
        </Image>
      </View>
    );
  }
}

// const mapstate = state => {
//   return {
//     bool: state.bool,
//     dimensions: state.dimensions
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     setBoard: board => dispatch(setBoard(board)),
//     setDimensions: board => dispatch(setDimensions(board))
//   }
// }

export default Menu;
