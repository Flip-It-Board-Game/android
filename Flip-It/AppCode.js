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
    } whwee
    this.handleClick = this.handleClick.bind(this)
    this.changeBoolean = this.changeBoolean.bind(this)
  }

  changeBoolean() {
    this.setState({ bool: !this.state.bool })
  }

  handleClick(v1, v2, v3, v4, v5) {
    let tempArr = this.state.squares.slice()
    if (this.state.squares[v1] === 'black') {
      tempArr.splice(v1, 1, 'white')
      this.setState({ squares: tempArr })
    }
    if (this.state.squares[v1] === 'white') {
      tempArr.splice(v1, 1, 'black')
      this.setState({ squares: tempArr })
    }
    if (this.state.squares[v2] === 'black') {
      tempArr.splice(v2, 1, 'white')
      this.setState({ squares: tempArr })
    }
    if (this.state.squares[v2] === 'white') {
      tempArr.splice(v2, 1, 'black')
      this.setState({ squares: tempArr })
    }
    if (this.state.squares[v3] === 'black') {
      tempArr.splice(v3, 1, 'white')
      this.setState({ squares: tempArr })
    }
    if (this.state.squares[v3] === 'white') {
      tempArr.splice(v3, 1, 'black')
      this.setState({ squares: tempArr })
    }
    if (this.state.squares[v4] === 'black') {
      tempArr.splice(v4, 1, 'white')
      this.setState({ squares: tempArr })
    }
    if (this.state.squares[v4] === 'white') {
      tempArr.splice(v4, 1, 'black')
      this.setState({ squares: tempArr })
    }
    if (this.state.squares[v5] === 'black') {
      tempArr.splice(v5, 1, 'white')
      this.setState({ squares: tempArr })
    }
    if (this.state.squares[v5] === 'white') {
      tempArr.splice(v5, 1, 'black')
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
          <Button transparent light onPress={this.changeBoolean}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: `${this.state.bool ? 'black' : 'white'}`,
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
          <Button
            transparent
            light
            onPress={() => this.handleClick(0, 1, 2, 5)}
          >
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[1],
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
          <Button
            transparent
            light
            onPress={() => this.handleClick(1, 2, 3, 6)}
          >
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[2],
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
          <Button transparent light onPress={() => this.handleClick(2, 3, 7)}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[3],
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
        </View>

        <View>
          <Button
            transparent
            light
            onPress={() => this.handleClick(0, 4, 5, 8)}
          >
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[4],
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
          <Button
            transparent
            light
            onPress={() => this.handleClick(1, 4, 5, 6, 9)}
          >
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[5],
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
          <Button
            transparent
            light
            onPress={() => this.handleClick(2, 5, 6, 7, 10)}
          >
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[6],
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
          <Button
            transparent
            light
            onPress={() => this.handleClick(3, 6, 7, 11)}
          >
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[7],
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
        </View>

        <View>
          <Button
            transparent
            light
            onPress={() => this.handleClick(4, 8, 9, 12)}
          >
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[8],
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
          <Button
            transparent
            light
            onPress={() => this.handleClick(5, 8, 9, 10, 13)}
          >
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[9],
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
          <Button
            transparent
            light
            onPress={() => this.handleClick(6, 9, 10, 11, 14)}
          >
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[10],
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
          <Button
            transparent
            light
            onPress={() => this.handleClick(7, 10, 11, 15)}
          >
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[11],
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
        </View>

        <View>
          <Button transparent light onPress={() => this.handleClick(8, 12, 13)}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[12],
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
          <Button
            transparent
            light
            onPress={() => this.handleClick(9, 12, 13, 14)}
          >
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[13],
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
          <Button
            transparent
            light
            onPress={() => this.handleClick(10, 13, 14, 15)}
          >
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[14],
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
          <Button
            transparent
            light
            onPress={() => this.handleClick(11, 14, 15)}
          >
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: this.state.squares[15],
                borderWidth: 1,
                borderColor: 'orange'
              }}
            />
          </Button>
        </View>
        {this.state.squares.includes('black') ? (
          <Text />
        ) : (
          <Text
            style={{
              width: 50,
              height: 50,
              borderWidth: 1
            }}
          >
            You Won!
          </Text>
        )}
        {console.log(this.state.squares.includes('black'))}
        {console.log(this.state.squares)}
      </View>
    )
  }
}

// import React, { Component } from 'react'
// import { AppRegistry, View } from 'react-native'
// import { Container, Header, Content, Button, Text } from 'native-base'

// export default class JustifyContentBasics extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       bool: true,
//       squares: [
//         'black',
//         'black',
//         'black',
//         'black',
//         'black',
//         'black',
//         'black',
//         'black',
//         'black',
//         'black',
//         'black',
//         'black',
//         'black',
//         'black',
//         'black',
//         'black'
//       ]
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick(v1, v2, v3, v4, v5) {
//     let tempArr = this.state.squares.slice()
//     if (this.state.squares[v1] === 'black') {
//       tempArr.splice(v1, 1, 'white')
//       this.setState({ squares: tempArr })
//     }
//     if (this.state.squares[v1] === 'white') {
//       tempArr.splice(v1, 1, 'black')
//       this.setState({ squares: tempArr })
//     }
//     if (this.state.squares[v2] === 'black') {
//       tempArr.splice(v2, 1, 'white')
//       this.setState({ squares: tempArr })
//     }
//     if (this.state.squares[v2] === 'white') {
//       tempArr.splice(v2, 1, 'black')
//       this.setState({ squares: tempArr })
//     }
//     if (this.state.squares[v3] === 'black') {
//       tempArr.splice(v3, 1, 'white')
//       this.setState({ squares: tempArr })
//     }
//     if (this.state.squares[v3] === 'white') {
//       tempArr.splice(v3, 1, 'black')
//       this.setState({ squares: tempArr })
//     }
//     if (this.state.squares[v4] === 'black') {
//       tempArr.splice(v4, 1, 'white')
//       this.setState({ squares: tempArr })
//     }
//     if (this.state.squares[v4] === 'white') {
//       tempArr.splice(v4, 1, 'black')
//       this.setState({ squares: tempArr })
//     }
//     if (this.state.squares[v5] === 'black') {
//       tempArr.splice(v5, 1, 'white')
//       this.setState({ squares: tempArr })
//     }
//     if (this.state.squares[v5] === 'white') {
//       tempArr.splice(v5, 1, 'black')
//       this.setState({ squares: tempArr })
//     }
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
//                 return (
//                   <Square state={this.state.squares}

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
