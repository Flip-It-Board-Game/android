// import React, { Component } from 'react'
// import { View, StyleSheet, Button, Text } from 'react-native'
// import { connect } from 'react-redux'
// import { setDimensions } from './store/store'

// class Menu extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     let styles = StyleSheet.create({
//       container: {
//         justifyContent: 'center'
//         // flexDirection: 'row',
//         // flexWrap: 'wrap'
//       }
//     })
//     let buttonArr = []
//     for (let i = 2; i < 8; i++) {
//       buttonArr.push(
//         <Button
//           onPress={() => {
//             {/* this.props.setBoard({ width: i, height: i }) */}
//             this.props.setDimensions({ width: i, height: i })
//           }}
//         >
//           <Text>
//             {'  '}
//             {i} X {i}
//             {'  '}
//           </Text>
//         </Button>
//       )
//     }

//     return (
//       <View style={styles.container}>{buttonArr.map(button => button)}</View>
//     )
//   }
// }

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

// export default connect(mapstate, mapDispatch)(Menu)
