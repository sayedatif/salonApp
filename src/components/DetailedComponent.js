import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import ActionButton from 'react-native-action-button';

import CardComponent from './CardComponent';

class DetailedComponent extends React.Component {
  render() {
    return (
      <View style={styles.detailContainer}>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <ActionButton buttonColor="rgba(231,76,60,1)"/>
      </View>
    );
  }
}

export default DetailedComponent;

// Styles
import { Fonts, Metrics, Colors } from '../themes';
const styles = StyleSheet.create({
  detailContainer:{
    flex:3,
    backgroundColor:'green'
  }
});
