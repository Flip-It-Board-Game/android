import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import Grid from './components/grid'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Grid />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
