import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


import SearchBox from './SearchBar';
import TabView from './TabView';


class NavigationComponent extends React.Component {
  render() {
    return (
      <View style={styles.navContainer}>
        <SearchBox />
        <TabView />
      </View>
    );
  }
}

export default NavigationComponent;

// Styles
import { Fonts, Metrics, Colors } from '../themes';
const styles = StyleSheet.create({
  navContainer:{
    flex:1,
    // backgroundColor:"yellow",
  }
});
