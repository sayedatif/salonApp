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

import PersistConfig from './../config/PersistConfig';
import { actions as rootActions } from './../store/root';
import Hello from './../components/Hello';
import Feedback from './../components/Feedback';

const { height, width } = Dimensions.get('window');


class RootContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'name',
      number: 'Contact-number',
      note: 'Extra Note here'
    };
  }

  componentDidMount() {
    // if redux persist is not active fire startup action
    if (!PersistConfig.active) {
      this.props.init();
    }
  }

  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="light-content" />

        <View style={{flexDirection: 'row'}}>
          <Text style={{marginTop: 10, marginLeft: 10, fontSize: 18, color: '#000'}} >Name</Text>
          <TextInput

            style={{marginTop: 10, marginLeft: 10, marginRight: 10, height: 40, width: width/3, borderColor: '#000', borderWidth: 1}}
          />
          <Text style={{marginTop: 10, marginLeft: 10, fontSize: 18, color: '#000'}} >Number</Text>
          <TextInput
            
            style={{marginTop: 10, marginLeft: 10, marginRight: 10, height: 40, width: width/2.05, alignSelf: 'flex-end', borderColor: '#000', borderWidth: 1}}
          />
        </View>
        <Feedback />
        <View style={styles.wrap}>
          <TextInput
            value={this.state.note}
            multiline = {true}
            numberOfLines = {6}
            style={{marginLeft:10, marginRight: 10, marginBottom: 10, borderColor: '#000', borderWidth: 1}}
          />
        </View>
      </View>
    );
  }
}

const mapStateToDispatch = (dispatch) => ({
  init: () => dispatch(rootActions.loadInit())
});

export default connect(null, mapStateToDispatch)(RootContainer);

// Styles
import { Fonts, Metrics, Colors } from '../themes';
const styles = StyleSheet.create({
  applicationView: {
    flex: 1
  },
  wrap: {
    flex: 1,
    // width: WIDTH,
    marginBottom: 50,
    // backgroundColor: 'red',
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
