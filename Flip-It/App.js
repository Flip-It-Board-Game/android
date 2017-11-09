// import React, { Component } from 'react'
// import { AppRegistry, View } from 'react-native'
// import { Container, Header, Content, Button, Text } from 'native-base'

// export default class JustifyContentBasics extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       bool: true,
//       num: 0
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick(val) {
//     this.setState({ bool: !this.state.bool })
//     this.setState({ num: val })
//     console.log(val)
//   }

//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           flexDirection: 'row',
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}
//       >
//         {['1', '2', '3', '4'].map(val => {
//           return (
//             <View key={val}>
//               {['1', '2', '3', '4'].map(val2 => {
//                 let colorSq = 'black'
//                 let num = val * val2
//                 if (num === this.state.num) {
//                   this.state.bool ? (colorSq = 'black') : (colorSq = 'white')
//                 }
//                 return (
//                   <Button
//                     transparent
//                     light
//                     key={val2 * val}
//                     onPress={() => this.handleClick(num)}
//                   >
//                     <View
//                       style={{
//                         width: 50,
//                         height: 50,
//                         backgroundColor: colorSq,
//                         borderRadius: 4,
//                         borderWidth: 1,
//                         borderColor: 'orange'
//                       }}
//                     />
//                   </Button>
//                 )
//               })}
//             </View>
//           )
//         })}
//       </View>
//     )
//   }
// }

import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'
import { Container, Header, Content, Button, Text } from 'native-base'

export default class JustifyContentBasics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bool: true,
      squares: [
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black'
      ]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(val) {
    let tempArr = this.state.squares.slice()
    tempArr.splice(val, 1, '')
    if (this.state.squares[val] === 'black') {
      tempArr.splice(val, 1, 'white')
      this.setState({ squares: tempArr })
    }
    if (this.state.squares[val] === 'white') {
      tempArr.splice(val, 1, 'black')
      this.setState({ squares: tempArr })
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View>
          <Button transparent light onPress={() => this.handleClick(0)}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[0],
                borderRadius: 4,
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
          <Button transparent light onPress={() => this.handleClick(1)}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[1],
                borderRadius: 4,
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
          <Button transparent light onPress={() => this.handleClick(2)}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[2],
                borderRadius: 4,
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
          <Button transparent light onPress={() => this.handleClick(3)}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[3],
                borderRadius: 4,
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
        </View>

        <View>
          <Button transparent light onPress={() => this.handleClick(4)}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[4],
                borderRadius: 4,
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
          <Button transparent light onPress={() => this.handleClick(5)}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[5],
                borderRadius: 4,
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
          <Button transparent light onPress={() => this.handleClick(6)}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[6],
                borderRadius: 4,
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
          <Button transparent light onPress={() => this.handleClick(7)}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[7],
                borderRadius: 4,
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
        </View>

        <View>
          <Button transparent light onPress={() => this.handleClick(8)}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[8],
                borderRadius: 4,
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
          <Button transparent light onPress={() => this.handleClick(9)}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[9],
                borderRadius: 4,
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
          <Button transparent light onPress={() => this.handleClick(10)}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[10],
                borderRadius: 4,
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
          <Button transparent light onPress={() => this.handleClick(11)}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[11],
                borderRadius: 4,
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
        </View>

        <View>
          <Button transparent light onPress={() => this.handleClick(12)}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[12],
                borderRadius: 4,
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
          <Button transparent light onPress={() => this.handleClick(13)}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[13],
                borderRadius: 4,
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
          <Button transparent light onPress={() => this.handleClick(14)}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[14],
                borderRadius: 4,
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
          <Button transparent light onPress={() => this.handleClick(15)}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[15],
                borderRadius: 4,
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
        </View>
      </View>
    )
  }
}
