import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import { SearchBar } from 'react-native-elements';

class SearchBox extends React.Component {

  _textChanged(){
    console.log("Inside _textChanged");
    //TODO
  }
  render() {
    return (
      <View style={styles.searchContainer}>
        <SearchBar
        lightTheme
        onChangeText={() => this._textChanged()}
        placeholder='Search Customers' />
      </View>
    );
  }
}

export default SearchBox;

// Styles
import { Fonts, Metrics, Colors } from '../themes';
const styles = StyleSheet.create({
  searchContainer:{
    flex:1.7,
    backgroundColor:Colors.silver,
  }
});
