import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Tabs from 'react-native-tabs';

import ListComponent from './ListComponent';

class TabView extends React.Component {

  constructor(props){
      super(props);
      let tabContent=[];
      tabContent.push(
        <ListComponent name="Bookings" key="bookings" />
      )
      this.state={
        tab: tabContent,
        tabName : "Bookings"
      }
  }

  _renderSelectedTab(el){
    let selectedTab = el.props.name;
    console.log("Selected Tab", selectedTab);

    let tabContent=[];
    switch(selectedTab){
      case "Bookings":
        tabContent.push(<ListComponent name="Bookings" key="bookings" />)
        this.setState({tab:tabContent, tabName:"Bookings"})
        break;

      case "Customers":
        tabContent.push(<ListComponent name="Customers" key="customers" />)
        this.setState({tab:tabContent, tabName:"Customers"})
        break;

      case "Profile":
        tabContent.push(<ListComponent name="Profile" key="profile" />)
        this.setState({tab:tabContent, tabName:"Profile"})
        break;

    }
  }

  render() {
    return (
      <View style={styles.tabContainer}>
        {this.state.tab}
        <Tabs selected={this.state.tabName}
              style={styles.tabStyle}
              selectedStyle={styles.selectedTabStyle}
              onSelect={(el) => this._renderSelectedTab(el)}>
              <Text style={styles.individualTabStyle} selectedIconStyle={{borderTopWidth:5,borderTopColor:'red'}} name="Bookings">Bookings</Text>
              <Text style={styles.individualTabStyle} selectedIconStyle={{borderTopWidth:5,borderTopColor:'red'}} name="Customers">Customers</Text>
              <Text style={styles.individualTabStyle} selectedIconStyle={{borderTopWidth:5,borderTopColor:'red'}} name="Profile">Profile</Text>
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
    flex:10,
    backgroundColor:Colors.cloud,
  },
  tabStyle:{
    flex:1,
    backgroundColor:"#fff",
  },
  individualTabStyle:{
    fontSize:17
  }
});
