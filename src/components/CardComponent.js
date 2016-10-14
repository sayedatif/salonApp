import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class CardComponent extends React.Component {

  _addService(){
    console.log("Inside _addService");
    //TODO
  }
  render() {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.supportingView}></View>
        <View style={styles.infoContainer}>
          <ServiceDetails />
          <CustomerBox />
        </View>
        <Text style={styles.displayTime}> 2:00 pm - 3:00 pm </Text>
      </View>
    );
  }
}
class ServiceDetails extends React.Component{
  render(){
    return(
      <View style={styles.serviceBox}>
        <View style={{paddingTop:10, flexDirection:"row"}}>
          <View>
            <Text style={styles.serviceStylistInfo}> Haircut : Vipul  Rs. 20</Text>
            <Text style={styles.serviceStylistInfo}> Massage : Anshuman Rs. 50 </Text>
            <Text style={styles.serviceStylistInfo}> Spa : Sachin Rs. 100 </Text>
            <Text style={styles.serviceStylistInfo}> Total Amount : Rs. 170 </Text>
          </View>
          <TouchableOpacity onPress={() => this._addService()}>
            <Text style={styles.addService}> Add Services </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}
class CustomerBox extends React.Component {
  render(){
    return(
      <View style={styles.customerBox}>
        <Text style={styles.customerName}>Sachin Bansal</Text>
        <Text style={styles.customerMobile}>8348521244</Text>
        <Text style={styles.customerGender}>Male</Text>
      </View>
    )
  }
}

export default CardComponent;

// Styles
import { Fonts, Metrics, Colors } from '../themes';
const styles = StyleSheet.create({
  cardContainer:{
    flex:1,
    margin:10,
    overflow: 'visible',
    marginRight:20,
    left:10
  },
  CustomerBox:{
    flex:1,
  },
  displayTime:{
    backgroundColor:Colors.bloodOrange,
    position:"absolute",
    top: 5,
    left: 20,
    fontSize: 20,
    borderRadius: 20,
  },
  customerBox:{
    // backgroundColor: "red",
    flex:1,
  },
  serviceBox:{
    backgroundColor:'transparent',
    flex:1,
  },
  infoContainer:{
    backgroundColor:Colors.cloud,
    flexDirection: "row",
    flex:1,
  },
  customerName:{
    fontSize: 20,
    fontFamily:Fonts.type.base,
    top:10,
    left:10,
  },
  customerMobile:{
    fontSize: 20,
    fontFamily:Fonts.type.base,
    top:10,
    left:10,
  },
  customerGender:{
    fontSize: 20,
    fontFamily:Fonts.type.base,
    top:10,
    left:10,
  },
  serviceStylistInfo:{
    fontSize:20,
    fontFamily:Fonts.type.base,
    left:10,
  },
  addService:{
    fontSize:22,
    fontFamily:Fonts.type.base,
    left:10,
    // backgroundColor: "green"
  },
  supportingView:{
    height:17,
    backgroundColor:'#fff',
  },
});
