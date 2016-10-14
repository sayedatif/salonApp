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
import UserFeedback from './../components/UserFeedback'
import PaymentComponent from './../components/PaymentComponent'

const { height, width } = Dimensions.get('window');


class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

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
          <UserFeedback />
      </View>
    );
  }
}

const mapStateToDispatch = (dispatch) => ({
  init: () => dispatch(rootActions.loadInit())
});

export default connect(null, mapStateToDispatch)(Feedback);

// Styles
import { Fonts, Metrics, Colors } from '../themes';
const styles = StyleSheet.create({
  applicationView: {
    flex: 1
  },
});
