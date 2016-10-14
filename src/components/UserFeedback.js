import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Dimensions,
  StyleSheet
} from 'react-native';

import FeedbackSmiley from './FeedbackSmiley';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { Fonts, Metrics, Colors } from '../themes';

export default class UserDetail extends React.Component{
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <View>
        <View style={{flexDirection: 'row', marginBottom: 50}}>
          <FormLabel>Name</FormLabel>
          <FormInput containerStyle={{marginTop: 10, width: Metrics.screenWidth/4 }} placeholder='User name' />
          <FormLabel>Number</FormLabel>
          <FormInput containerStyle={{marginTop: 10, width: Metrics.screenWidth/3, alignSelf: 'flex-end'}} placeholder='User number'/>
        </View>
        <FeedbackSmiley />
        <View style={styles.wrap}>
          <View style={{flexDirection: 'row'}}>
            <FormLabel>Comments</FormLabel>
            <FormInput
              multiline = {true}
              numberOfLines = {4}
              containerStyle={{width: Metrics.screenWidth/1.5 }} placeholder='Extra Note'
              />
          </View>
            <Button
              raised
              icon={{name: 'cached'}}
              title='Submit'
              buttonStyle={{alignSelf: 'center', height: 40}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  applicationView: {
    flex: 1
  },
  wrap: {
    flex: 1,
    marginTop: 10,
    alignSelf: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background
  },
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
