// import React, { Component } from 'react'
// import { View, StyleSheet, Text } from 'react-native'
// import { Table, Row, Rows } from 'react-native-table-component'
// import Buttons from './buttons'
// import { Button } from 'native-base'
// import { connect } from 'react-redux'
// import Reset from './reset'
// import Solution from './solution'

// class LevelSelector extends Component {
//   render() {
//     let buttons = []
//     {
//       for (let i = 1; i <= 16; i++) {
//         buttons.push(<Button title={`Level ${i}`} />)
//       }
//     }
//     return <View style={styles.container}>{buttons}</View>
//   }
// }

// let styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#C0C0C0',
//     justifyContent: 'center'
//   }
// })

// export default LevelSelector

import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';

class LevelCreate extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // let buttons = []
    // {
    //   for (let i = 1; i <= 16; i++) {
    //     buttons.push(
    //       <Button
    //         title={`Level ${i}`}
    //         onPress={() => {
    //           this.props.navigation.navigate('GameScreen')
    //         }}
    //       />
    //     )
    //   }
    // }
    console.log('move', this.props)
    return (
      <View style={styles.container}>
        <Text>here</Text>
        <Button
          title="level 1"
          onPress={() => {
            this.props.navigation.navigate('GameScreen');
          }}
        >
          <Text>BUTTON</Text>
        </Button>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    backgroundColor: '#C0C0C0',
    justifyContent: 'center'
  }
});

const mapstate = state => {
  return {
    bool: state.bool
  };
};

export default connect(mapstate)(LevelCreate);
