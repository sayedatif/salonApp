import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Tabs from 'react-native-tabs';

class TabView extends React.Component {
  render() {
    return (
      <View style={styles.tabContainer}>
        <Tabs selected="Bookings"
              style={styles.tabStyle}
              selectedStyle={styles.selectedTabStyle}
              onSelect={el=>this.setState({page:el.props.name})}>

              <Text name="Bookings">Bookings</Text>
              <Text name="Customers">Customers</Text>
              <Text name="Profile">Profile</Text>

        </Tabs>
      </View>
    );
  }
}

export default TabView;

// Styles
import { Fonts, Metrics, Colors } from '../themes';
const styles = StyleSheet.create({
  tabContainer:{
    flex:1.5,
    backgroundColor:"pink",
  },
  tabStyle:{
    backgroundColor:"pink",
  },
  selectedTabStyle:{

  }
});
