import { StyleSheet, TabNavigator, View, Text } from 'react-native'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Grid from '../components/grid'
import store from '../components/store/store'
import { Icon } from 'react-native-elements'

class GameScreen extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ backgroundColor: 'white' }}>
          <Grid />
        </View>
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
