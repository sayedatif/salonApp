import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
} from 'react-native';

import ActionButton from 'react-native-action-button';

import CardComponent from './CardComponent';

class DetailedComponent extends React.Component {
  constructor(props){
    super(props);
    // console.log("Inside DetailedComponent", props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let bookingsDetails=[
      { "day":"1", "bookings": "2"},
      { "day":"1", "bookings": "2"},
      { "day":"1", "bookings": "2"},
      { "day":"1", "bookings": "2"},
      { "day":"1", "bookings": "2"},
      { "day":"1", "bookings": "2"},
      { "day":"1", "bookings": "2"},
      { "day":"1", "bookings": "2"},
      { "day":"1", "bookings": "2"},
    ]

    this.state = {
      dataSource: ds.cloneWithRows(bookingsDetails),
    };
  }

  componentDidMount(){
    // console.log("Inside DetailedComponent CDM", this.state.dataSource);
  }

  _renderCards(item){
    // console.log("Inside _renderCards", item);
    return(
      <CardComponent item={item} />
    )
  }

  render() {
    return (
      <View style={styles.detailContainer}>
        {
          this.props.name == "Customers" &&
          <View>
            <Text>Sachin Bansal</Text>
            <Text>8348521244</Text>
            <Text>Female</Text>
          </View>
        }
        <ListView
          ref={component => this["renderCardList"] = component}
          dataSource={this.state.dataSource}
          renderRow={(item) => this._renderCards(item)}
        />
        <ActionButton buttonColor="rgba(231,76,60,1)"/>
      </View>
    );
  }
}

export default DetailedComponent;

// Styles
import { Fonts, Metrics, Colors } from '../themes';
const styles = StyleSheet.create({
  detailContainer:{
    flex:3,
    backgroundColor:'#fff'
  }
});
