import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
} from 'react-native';

import moment from 'moment';

class ListComponent extends React.Component {

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    //Temporary Date Array with predefined Bookings
    let dateLimit=15;
    let dateArrayDataSource=[];
    let date = moment().toDate();

    for(var i=0 ; i<dateLimit; i++){
      let displayDate = moment(date).format("MMM DD")
      // console.log("Inside Loop", displayDate);
      dateArrayDataSource.push(
        {
        "bookings": i,
        "date": displayDate
        }
      );
      date = moment(date).add(1,"d").toDate();
    }

    this.state = {
      dataSource: ds.cloneWithRows(dateArrayDataSource),
    };
  }

  _renderDateRow(item){
    console.log("Inside _renderDateRow", item);
    return(
      <View style={styles.rowWrapper}>
        <Text style={styles.rowDate}>{item.date}</Text>
        <Text style={styles.rowBookings}>{item.bookings} Bookings</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.listContainer}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(item) => this._renderDateRow(item)}
      />
      </View>
    );
  }
}

export default ListComponent;

// Styles
import { Fonts, Metrics, Colors } from '../themes';
const styles = StyleSheet.create({
  listContainer:{
    flex:20,
    backgroundColor:"grey",
  },
  rowWrapper:{
    backgroundColor:"purple",
    margin: 7,
    flexDirection:"row",
    borderRadius: 30,
  },
  rowBookings:{
    fontSize:20,
    left:15,
    top:15,
  },
  rowDate:{
    fontSize: 15,
    backgroundColor:'red',
    padding:10,
    paddingLeft:20,
    width:60,
    height:60,
    borderRadius:30,
  }
});
