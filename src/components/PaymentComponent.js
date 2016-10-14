import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Dimensions,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import { FormLabel, FormInput, ButtonGroup } from 'react-native-elements'

export default class PaymentComponent extends React.Component{
  constructor() {
    super();
    this.state = {
        selectedIndex: null
      }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  render() {
    const buttons = ['Cash', 'Card', 'Wallet', 'Others']
    const { selectedIndex } = this.state
    return (
      <View style={styles.applicationView}>
        <FormInput
          placeholder= 'Coupon Code if any'
          containerStyle={{width: width/1.1, marginRight: 10}} />
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons} />
      </View>
    );
  }
}

import { Fonts, Metrics, Colors } from '../themes';
const styles = StyleSheet.create({
  applicationView: {
    flex: 1
  },
});
