import {Alert, Image, Text, TouchableHighlight, View, ScrollView, RefreshControl} from 'react-native';
import React from 'react';
import styles from './styles';
//import ScrollElements from '../../components/scrollview/ScrollView';
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';

const url = "http://api.ycpradiotelescope.com:8080";


class CompleteScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            appointments: []
        };
        this._getCompleteAppointments = this._getCompleteAppointments.bind(this);
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

    _getCompleteAppointments(jwt, userId) {
        axios.defaults.headers.common["Content-Type"] = "application/json";
        axios.defaults.headers.common["Authorization"] = jwt;
        return axios
            .get(`${url}/api/users/${userId}/appointments/completedList?page=0&size=50`)
            .then(response => {
                this.setState({
                    isRefreshing: true,
                    appointments: response.data.data.content
                });
            })
            .catch(error => {
                console.log('Error getting appointments', error);
                this.buttonAlert();
            });
    };


    buttonAlert(){
        Alert.alert(
          "Notice",
          "You have 0 completed appointments",
          [
            {
              text: "Go Back Home",
              onPress: () => this.props.navigation.goBack()
            },
            {
              text: "Create New Appointment",
              onPress: () => this.props.navigation.navigate("Schedule")
            },
          ],
          { cancelable: false }
        );
    };

    _getData(){
        this.setState({isRefreshing: true});
        try {
            AsyncStorage.getItem('jwt').then((value) => {
                AsyncStorage.getItem('userid').then((val) => {
                    this._getCompleteAppointments(value,val);
                });
            });
        } catch(e) {
            console.log("Error loading data: ", e.message);
        }
        return
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <Text style={styles.title}>Complete Appointments</Text>
                    <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
                        <Image
                            source={require("../../assets/images/backWhite.png")}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this._getData()} style={styles.load}>
                        <Image
                            source={require("../../assets/images/futureIconWhiteSmall.png")}
                        />
                    </TouchableHighlight>
                </View>
                <View style={styles.scroll}>
                    <View>
                         <ScrollView style = {styles.element}>
                             {
                                 this.state.appointments.map((item, index) => (
                                     <View key = {item.id} style = {styles.item}>
                                         <View style = {styles.text}>
                                             <Text style = {styles.name}>{item.userFirstName}s Appointment</Text>
                                             <Text style = {styles.type}>Type: {item.type}</Text>
                                             <Text style = {styles.type}>Status: {item.status}</Text>
                                             <Text style = {styles.type}>Begins: {moment(item.startTime).format('LLL')  }</Text>
                                             <Text style = {styles.type}>Ends: {moment(item.endTime).format('LLL')  }</Text>
                                             <Text style = {styles.type}>RightAscension: {item.rightAscension}         Declination: {item.declination}</Text>
                                         </View>
                                     </View>
                                 ))
                             }
                         </ScrollView>
                    </View>
                </View>
              {!this.state.isRefreshing === true && (
                  this._getData())}
            </View>
        );
    }
}

export default CompleteScreen ;

