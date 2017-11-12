import React, { Component } from 'react';
import {    
  StyleSheet,
  Text,
  View,
  Slider
} from 'react-native';

export default class Profile extends Component {
  constructor(props) {
   super(props)
   this.state = { volume: 1 }
  } 
  getVal(val){
  console.warn(val);
  }     
  render() {    

    return (
      <View style={styles.container}>
        <Slider
         style={{ width: 300 }}
         step={1}
         minimumValue={1}
         maximumValue={100}
         value={this.state.volume}
         onValueChange={val => this.setState({ volume: val })}
         onSlidingComplete={ val => this.getVal(val)}
        />
        <Text style={styles.welcome}>
          {this.state.volume}
        </Text>            
        <Text style={styles.instructions}>
          Slide to change volume
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});