import React, { Component } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { Button } from 'native-base'
import GameScreen from './GameScreen'
import LevelSelector from './LevelSelector'

class GameMenu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Image
          style={{
            flex: 1,
            position: 'absolute',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: 380,
            height: 650
          }}
          source={require('../images/snowman.jpg')}
        >
          <View>
            <Button
              transparent
              light
              onPress={() => this.props.navigation.navigate('GameScreen')}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '900',
                  color: 'black',
                  backgroundColor: 'rgba(0,0,0,0)',
                  borderWidth: 1,
                  paddingLeft: 25,
                  paddingRight: 23,
                  paddingTop: 3,
                  borderColor: 'black',
                  width: 170,
                  textAlign: 'center'
                }}
              >
                Start
              </Text>
            </Button>
            <Button
              transparent
              light
              onPress={() => this.props.navigation.navigate('LevelSelector')}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '900',
                  color: 'black',
                  backgroundColor: 'rgba(0,0,0,0)',
                  borderWidth: 1,
                  paddingLeft: 25,
                  paddingRight: 23,
                  paddingTop: 3,
                  borderColor: 'black',
                  width: 170,
                  textAlign: 'center'
                }}
              >
                Level Select
              </Text>
            </Button>
            <Button
              transparent
              light
              onPress={() => this.props.navigation.navigate('GameStats')}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '900',
                  color: 'black',
                  backgroundColor: 'rgba(0,0,0,0)',
                  borderWidth: 1,
                  paddingLeft: 25,
                  paddingRight: 23,
                  paddingTop: 3,
                  borderColor: 'black',
                  width: 170,
                  textAlign: 'center'
                }}
              >
                Game Stats
              </Text>
            </Button>
            <Button
              transparent
              light
              onPress={() => this.props.navigation.navigate('GameSettings')}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '900',
                  color: 'black',
                  backgroundColor: 'rgba(0,0,0,0)',
                  borderWidth: 1,
                  paddingLeft: 25,
                  paddingRight: 23,
                  paddingTop: 3,
                  borderColor: 'black',
                  width: 170,
                  textAlign: 'center'
                }}
              >
                Settings
              </Text>
            </Button>
            <Button
              transparent
              light
              onPress={() => this.props.navigation.navigate('About')}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '900',
                  color: 'black',
                  backgroundColor: 'rgba(0,0,0,0)',
                  borderWidth: 1,
                  paddingLeft: 25,
                  paddingRight: 23,
                  paddingTop: 3,
                  borderColor: 'black',
                  width: 170,
                  textAlign: 'center'
                }}
              >
                About
              </Text>
            </Button>
            <Button
              transparent
              light
              onPress={() => this.props.navigation.navigate('Test')}
              title="AsyncStorage Test"
            />
          </View>
        </Image>
      </View>
    )
  }
}

export default GameMenu
