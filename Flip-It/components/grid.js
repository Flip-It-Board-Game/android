import React, { Component } from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { Table, Rows } from 'react-native-table-component';
import Buttons from './buttons';
import { connect } from 'react-redux';
import Reset from './reset';
import Timer from './timer2';
import YouWon from './youWon';
import { setCount, reset } from './store/store';
import Dimensions from 'Dimensions';
let { height, width } = Dimensions.get('window');
const tHeight = height;
const tWidth = width;

class Grid extends Component {
  constructor(props) {
    super(props);
    this.num = 0;
  }

  componentWillMount() {
    this.props.setCount({ count: 0 });
  }

  componentWillUnmount() {
    this.props.reset();
  }

  render() {
    let width = this.props.dimensions && this.props.dimensions.width;
    let height = this.props.dimensions && this.props.dimensions.height;
    const gamePieceSize = tWidth * 0.81 / width;
    const num = width * height;
    let rowButtons = [];
    let tableData = [];
    for (let i = 0; i < num; i++) {
      rowButtons.push(<Buttons iNum={i} size={gamePieceSize} />);
      if ((i + 1) % width === 0) {
        tableData.push(rowButtons);
        rowButtons = [];
      }
    }
    const rowWidth = width * gamePieceSize + width * 2;
    const styles = StyleSheet.create({
      text: { marginLeft: 5 },
      row: { height: gamePieceSize, width: rowWidth },
      app: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
      },
      background: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
        width: tWidth,
        height: tHeight - 62
      },
      text2: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        marginBottom: 20
      },
      text3: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }
    });
    return (
      <View style={{ backgroundColor: 'white' }}>
        {this.props && this.props.bool.indexOf(true) === -1 ? (
          <View>
            <YouWon />
            <Reset />
          </View>
        ) : (
          <View style={styles.background}>
            <Text style={styles.text2} key="moveCount">
              Moves: {this.props.count.count}
            </Text>
            <Table borderStyle={{ borderWidth: 0, borderColor: '#1c1c1c' }}>
              <Rows
                data={tableData}
                style={styles.row}
                textStyle={styles.text}
              />
            </Table>
            <Text style={{ fontSize: 5 }}>{'\n'}</Text>
            <Timer />
            <Reset />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 9
              }}
            >
              <View
                style={{
                  backgroundColor: 'orange',
                  height: 30,
                  width: 30,
                  marginLeft: 10,
                  marginRight: 10
                }}
              />
              <View
                style={{
                  backgroundColor: 'red',
                  height: 30,
                  width: 30,
                  marginLeft: 10,
                  marginRight: 10
                }}
              />
              <View
                style={{
                  backgroundColor: 'orange',
                  height: 30,
                  width: 30,
                  marginLeft: 10,
                  marginRight: 10
                }}
              />
              <View
                style={{
                  backgroundColor: 'red',
                  height: 30,
                  width: 30,
                  marginLeft: 10,
                  marginRight: 10
                }}
              />
            </View>
          </View>
        )}
      </View>
    );
  }
}

const mapState = state => {
  return {
    bool: state.bool,
    dimensions: state.dimensions,
    count: state.count,
    won: state.won
  };
};

const mapDispatch = dispatch => {
  return {
    setCount: count => dispatch(setCount(count)),
    reset: () => dispatch(reset())
  };
};

export default connect(mapState, mapDispatch)(Grid);
