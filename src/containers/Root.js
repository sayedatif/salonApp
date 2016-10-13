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

import NavigationComponent from './../components/NavigationComponent';
import DetailedComponent from './../components/DetailedComponent';


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
        <NavigationComponent />
        <DetailedComponent />
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
    flex: 1,
    flexDirection: 'row',
  },
});
