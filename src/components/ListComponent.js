import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ListView,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

import moment from 'moment';

import DetailedComponent from './DetailedComponent';

class ListComponent extends React.Component {

  constructor(props){
    super(props);
    console.log("Receiving props in ListComponent", props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    //Temporary Date Array with predefined Bookings

    let selectedDataSource;
    if(this.props.name == "Bookings"){
      let dateLimit=15;
      let dateArrayDataSource=[];
      let date = moment().toDate();

      for(var i=0 ; i<dateLimit; i++){
        let displayDate = moment(date).format("MMM DD")
        // console.log("Inside Loop", displayDate);
        dateArrayDataSource.push(
          {
          "bookings": i,
          "displayDate": displayDate,
          "date": date,
          }
        );
        date = moment(date).add(1,"d").toDate();
      }
      selectedDataSource = dateArrayDataSource;
    }
    else if(this.props.name == "Customers"){
      let customerArrayDataSource=[];
      customerArrayDataSource.push({"customerId":"12345","customerName":"Vipul Allawadhi","customerMobile":"8348512144","customerGender":"F"});
      customerArrayDataSource.push({"customerId":"12345","customerName":"Anshuman Shah","customerMobile":"8348512143","customerGender":"M"});
      customerArrayDataSource.push({"customerId":"12345","customerName":"Sachin Bansal","customerMobile":"8348512145","customerGender":"M"});
      selectedDataSource = customerArrayDataSource;
    }
    else if(this.props.name == "Profile"){
      //TODO
    }
    this.state = {
      dataSource: ds.cloneWithRows(selectedDataSource),
    };
  }

  _requestBookingByDate(requestedDate, displayDate){
    //TODO API call with selected Date
    ToastAndroid.show('Bookings Requested for '+displayDate, ToastAndroid.SHORT);
    console.log("Inside _requestBookingByDate", requestedDate);

  }
  _requestBookingByCustomer(customerId){
    //TODO API call with selectedCustomer
    ToastAndroid.show('Bookings Requested for Customer: ' +customerId, ToastAndroid.SHORT);
    console.log("Inside _requestBookingByCustomer", customerId);
  }

  _renderDateRow(item){
    // console.log("Inside _renderDateRow", item);

    return(
      <View>
      {
        this.props.name == "Bookings" &&
        <TouchableOpacity onPress={() => this._requestBookingByDate(item.date, item.displayDate)}>
          <View style={styles.rowWrapper}>
            <Text style={styles.rowDate}>{item.displayDate}</Text>
            <Text style={styles.rowBookings}>{item.bookings} Bookings</Text>
          </View>
        </TouchableOpacity>
      }
      {
        this.props.name == "Customers" &&
        <TouchableOpacity onPress={() => this._requestBookingByCustomer(item.customerId)}>
          <View style={styles.rowWrapper}>
              {
                item.customerGender == "M" &&
                <Image style={{width: 50, height: 50, left:10}} source={{uri: 'https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/boy-512.png'}} />
              }
              {
                item.customerGender == "F" &&
                <Image style={{width: 50, height: 50, left:10}} source={{uri: 'https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/girl-512.png'}} />
              }
              <View style={{left:10}}>
              <Text style={styles.rowBookings}>{item.customerName}</Text>
              <Text style={styles.rowBookings}>{item.customerMobile}</Text>
              </View>
          </View>
        </TouchableOpacity>
        }
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
    flex:1,
    paddingBottom: 50,
  },
  rowWrapper:{
    backgroundColor:"white",
    margin: 7,
    flexDirection:"row",
    borderRadius: 30,
  },
  rowBookings:{
    fontSize:20,
    left:10,
    top:5,
  },
  rowDate:{
    fontSize: 15,
    backgroundColor:Colors.bloodOrange,
    padding:10,
    paddingLeft:20,
    width:60,
    height:60,
    borderRadius:30,
  }
});
