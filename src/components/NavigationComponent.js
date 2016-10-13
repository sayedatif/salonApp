import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


import SearchBox from './SearchBar';
import ListComponent from './ListComponent';
import TabView from './TabView';


class NavigationComponent extends React.Component {
  render() {
    return (
      <View style={styles.navContainer}>
        <SearchBox />
        <ListComponent />
        <TabView />
      </View>
    );
  }
}

export default NavigationComponent;

// Styles
import { Fonts, Metrics, Colors } from '../themes';
const styles = StyleSheet.create({
  fab:{
    right:0,
  },
  navContainer:{
    flex:1,
    backgroundColor:"yellow",
  }
});
