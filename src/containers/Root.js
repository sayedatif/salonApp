import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import PersistConfig from './../config/PersistConfig';
import { actions as rootActions } from './../store/root';

class RootContainer extends React.Component {
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
        <Text style={styles.welcome}>
          Hello
        </Text>
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
