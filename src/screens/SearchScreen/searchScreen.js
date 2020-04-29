import {Platform, Alert, Image, ScrollView, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import styles from './styles';
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';
import { SearchBar, CheckBox } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';

const url = "https://prod-api.ycpradiotelescope.com";

class SearchScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            showAppointments: false,
            filterSubmitted: false,
            isFullNameChecked: false,
            isFirstNameChecked: false,
            isLastNameChecked: false,
            isEmailChecked: false,
            isCompanyChecked: false,
            appointments:[],
            query: '',
        };
        this._getAppointments = this._getAppointments.bind(this);
        this._getData = this._getData.bind(this);
    }

    retrieveItem = async (key) => {
        try {
            const retrievedItem = await AsyncStorage.getItem(key);
            const item = JSON.parse(retrievedItem);
            return item;
        } catch (e) {
            console.log(e.message);
        }
        return;
    };

    updateSearch = query => {
        this.setState({ query });
        const appointments = this.state.appointments;
        if (query === '') {
            return [];
        }
        query = query.trim().toLowerCase();
    };

    _getAppointments(jwt, userId, value, search) {
        axios.defaults.headers.common["Content-Type"] = "application/json";
        axios.defaults.headers.common["Authorization"] = jwt;
        return axios
            .get(`${url}/api/appointments/search?page=0&size=10&value=${value}&search=${search}`)
            .then(response => {
                this.setState({
                    isRefreshing: false,
                    appointments: response.data.data.content,
                    showAppointments: false
                });
                if(JSON.parse(response.data.data.numberOfElements) == 0){
                    this.buttonAlert(value);
                }else if((JSON.parse(response.data.data.numberOfElements) > 0) && (this.state.appointments != null)){
                    this.setState({
                        showAppointments: true,
                    });
                }
            })
            .catch(error => {
                console.log('Error getting appointments', error);
            });
    };

    buttonAlert(value){
        Alert.alert(
          "Sorry",
          "But there were 0 results from searching: '"+ this.state.query +"'" ,
          [
            {
              text: "Go Back Home",
              onPress: () => this.props.navigation.goBack()
            },
            {
              text: "Cancel"
            },
          ],
          { cancelable: false }
        );
    };


    _getData(){
        this.setState({
            isRefreshing: true,
            appointments: []
        });
        try {
            AsyncStorage.getItem('jwt').then((value) => {
                AsyncStorage.getItem('userid').then((val) => {
                    var search = '';
                    if(this.state.isFullNameChecked == true){
                        search = 'userFullName';
                    }else if(this.state.isFirstNameChecked == true){
                        search = 'userFirstName';
                    }else if(this.state.isLastNameChecked == true){
                        search = 'userLastName';
                    }else if(this.state.isEmailChecked == true){
                        search = 'userEmail';
                    }else if(this.state.isFirstNameChecked == true){
                        search = 'userCompany';
                    }
                    this._getAppointments(value,val,this.state.query,search);
                });
            });
        } catch(e) {
            console.log("Error loading data: ", e.message);
        }
        return
    };

    showAppointmentsNow(){
        return(
            <ScrollView style = {styles.allResults}>
                 {
                     this.state.appointments.map((item, index) => (
                         <View key = {item.id} style = {styles.item}>
                             <View style = {styles.text}>
                                 <Text style = {styles.name}>{item.userFirstName}s Appointment</Text>
                                 <Text style = {styles.type}>Type: {item.type}          Status: {item.status}</Text>
                                 <Text style = {styles.type}>Begins: {moment(item.startTime).format('LLL')  }</Text>
                                 <Text style = {styles.type}>Ends: {moment(item.endTime).format('LLL')  }</Text>
                                 <Text style = {styles.RightAscension}> RightAscension: {item.rightAscension}         Declination: {item.declination}</Text>
                             </View>
                         </View>
                     ))
                 }
            </ScrollView>
        );
    }


  render() {
    const { filterSubmitted } = this.state;

    let filterData = [{
        value: 'Full Name',
    }, {
        value: 'First Name',
    }, {
        value: 'Last Name',
    },{
        value: 'Email',
    },{
        value: 'Company',
    }];

    return (
          <View style={styles.container}>
              <View style={styles.navbar}>
                  <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
                      <Image
                          source={require("../../assets/images/backWhite.png")}
                      />
                  </TouchableHighlight>
              </View>

              <View style={{ marginTop: Platform.OS === 'android' ? 20 : 70 }}>
                {filterSubmitted == false &&
                <TouchableHighlight onPress={() => this.setState({filterSubmitted: true})} style={styles.submitButton}>
                  <Text style={styles.buttonText}>SUBMIT</Text>
                </TouchableHighlight>}
              </View>

              {(filterSubmitted == false && this.state.showAppointments == false) && (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <View style={{ marginTop: 40 }}>
                  {filterSubmitted == false &&
                  <View style={styles.title}>
                    <Text style={{ color: 'grey', fontSize: 20 }}>Filters</Text>
                  </View>}
                  </View>
                  <View style={{ marginTop: Platform.OS === 'android' ? 20 : 30 }}>
                  {filterSubmitted == false &&
                  <CheckBox
                    center
                    title='Full Name'
                    checked={this.state.isFullNameChecked}
                    containerStyle={styles.checkBox}
                    checkedColor='green'
                    onPress={() => this.setState({isFullNameChecked: !this.state.isFullNameChecked})}
                  />}
                  </View>
                  <View style={{ marginTop: 20 }}>
                  {filterSubmitted == false &&
                  <CheckBox
                    center
                    title='First Name'
                    checked={this.state.isFirstNameChecked}
                    containerStyle={styles.checkBox}
                    checkedColor='green'
                    onPress={() => this.setState({isFirstNameChecked: !this.state.isFirstNameChecked})}
                  />}
                  </View>
                  <View style={{ marginTop: 20 }}>
                  {filterSubmitted == false &&
                  <CheckBox
                    center
                    title='Last Name'
                    checked={this.state.isLastNameChecked}
                    containerStyle={styles.checkBox}
                    checkedColor='green'
                    onPress={() => this.setState({isLastNameChecked: !this.state.isLastNameChecked})}
                  />}
                  </View>
                  <View style={{ marginTop: 20 }}>
                  {filterSubmitted == false &&
                  <CheckBox
                    center
                    title='Email'
                    checked={this.state.isEmailChecked}
                    containerStyle={styles.checkBox}
                    checkedColor='green'
                    onPress={() => this.setState({isEmailChecked: !this.state.isEmailChecked})}
                  />}
                  </View>
                  <View style={{ marginTop: 20 }}>
                  {filterSubmitted == false &&
                  <CheckBox
                    center
                    title='Company'
                    checked={this.state.isCompanyChecked}
                    containerStyle={styles.checkBox}
                    checkedColor='green'
                    onPress={() => this.setState({isCompanyChecked: !this.state.isCompanyChecked})}
                  />}
                  </View>
              </View>)}

              {(filterSubmitted == true && this.state.showAppointments == false) && (
              <View style={{ top: 70, alignItems: 'center' }}>
                  <SearchBar
                     placeholder="Type Here..."
                     onChangeText={this.updateSearch}
                     value={this.state.query}
                     containerStyle={styles.searchBar}
                  />
              </View>)}

              {(filterSubmitted == true && this.state.showAppointments == false) && (
              <View style={{ marginTop: 0 }}>
                    <TouchableHighlight onPress={() => this._getData()} style={styles.submitButton}>
                      <Text style={styles.buttonText}>SEARCH</Text>
                    </TouchableHighlight>
              </View>)}

              {this.state.showAppointments == true && (
              <View style={styles.scroll}>
                  <View>
                       {this.showAppointmentsNow()}
                  </View>
              </View>)}

          </View>
    );
  }
}

export default SearchScreen ;
