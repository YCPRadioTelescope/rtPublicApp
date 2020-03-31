import {Image, Text, TouchableHighlight, View, ScrollView, RefreshControl} from 'react-native';
import React from 'react';
import styles from './styles';
//import ScrollElements from '../../components/scrollview/ScrollView';
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';

const url = "https://prod-api.ycpradiotelescope.com";


class FutureScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            appointments: []
        };
        this._getFutureAppointments = this._getFutureAppointments.bind(this);
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

    _getFutureAppointments(jwt, userId) {
        axios.defaults.headers.common["Content-Type"] = "application/json";
        axios.defaults.headers.common["Authorization"] = jwt;
        return axios
            .get(`${url}/api/users/${userId}/appointments/futureList?page=0&size=50`)
            .then(response => {
                this.setState({
                    isRefreshing: false,
                    appointments: response.data.data.content
                });
            })
            .catch(error => {
                console.log('Error getting appointments', error);
            });
    };


    _getData(){
        this.setState({isRefreshing: true});
        try {
            AsyncStorage.getItem('jwt').then((value) => {
                AsyncStorage.getItem('userid').then((val) => {
                    this._getFutureAppointments(value,val);
                });
            });
        } catch(e) {
            console.log("Error loading data: ", e.message);
        }
        return
    };

    render() {
        var that = this;
        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <Text style={styles.title}>Future Appointments</Text>
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
                                             <Text style = {styles.type}>Type: {item.type}          Status: {item.status}</Text>
                                             <Text style = {styles.type}>Begins: {moment(item.startTime).format('LLL')  }</Text>
                                             <Text style = {styles.type}>Ends: {moment(item.endTime).format('LLL')  }</Text>
                                             <Text style = {styles.RightAscension}> RightAscension: {item.rightAscension}         Declination: {item.declination}</Text>
                                         </View>
                                     </View>
                                 ))
                             }
                         </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

export default FutureScreen ;
