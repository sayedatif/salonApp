import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet
} from 'react-native';

class Hello extends React.Component {
  render() {
    return (
      <Text style={styles.welcome}>
        Hello
      </Text>
    );
  }
}

export default Hello;

// Styles
import { Fonts, Metrics, Colors } from '../themes';
const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Fonts.base,
    margin: Metrics.baseMargin
  },
  myImage: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  }
});
