import {Image, ScrollView, Text, TouchableHighlight, View, Switch} from 'react-native';
import React from 'react';
import styles from './styles';
import ScrollElements from "../../components/scrollview/ScrollView";
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';
import { CheckBox } from 'react-native-elements';

const url = "http://api.ycpradiotelescope.com:8080";

class NotificationSettingsScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          emailSelected: false,
          textSelected: false,
          bothSelected: false,
          userId: 0,
          firstName: '',
          lastName: '',
          phoneNumber: '',
          company: '',
          notificationType: ''
      };
      this.retrieveInitialState = this.retrieveInitialState.bind(this);
  }

  componentDidMount(){
    this.retrieveInitialState();
  }

  retrieveInitialState(){
    AsyncStorage.getItem('userid').then((value) => {
        this.setState({
            userId: JSON.parse(value)
        })
    });
    AsyncStorage.getItem('firstname').then((value) => {
        this.setState({
            firstName: JSON.parse(value)
        })
    });
    AsyncStorage.getItem('lastname').then((value) => {
        this.setState({
            lastName: JSON.parse(value)
        })
    });
    AsyncStorage.getItem('phonenumber').then((value) => {
        this.setState({
            phoneNumber: JSON.parse(value)
        })
    });
    AsyncStorage.getItem('company').then((value) => {
        this.setState({
            company: JSON.parse(value)
        })
    });
    AsyncStorage.getItem('notificationtype').then((value) => {
        this.setState({
            notificationType: JSON.stringify(value)
        })
        if (value == "EMAIL"){
            this.setState({
                emailSelected: true,
                textSelected: false,
                bothSelected: false,
                notificationType: value
            })
        }else if (value == "SMS"){
            this.setState({
                emailSelected: false,
                textSelected: true,
                bothSelected: false,
                notificationType: value
            })
        }else if (value == "ALL"){
            this.setState({
                emailSelected: false,
                textSelected: false,
                bothSelected: true,
                notificationType: value
            })
        }
    });
  };

  saveItem = async (key, value) => {
      try {
        await AsyncStorage.setItem(key, value);
      } catch (e) {
        console.log("Error while saving Item: ", key,", ERROR MESSAGE: ", e);
      }
  }


  changeNotificationType(type){
    AsyncStorage.removeItem('notificationtype');
    this.saveItem('notificationtype', type);
    if (type == "EMAIL"){
        this.setState({
            emailSelected: true,
            textSelected: false,
            bothSelected: false,
            notificationType: type
        })
    }else if (type == "SMS"){
        this.setState({
            emailSelected: false,
            textSelected: true,
            bothSelected: false,
            notificationType: type
        })
    }else if (type == "ALL"){
        this.setState({
            emailSelected: false,
            textSelected: false,
            bothSelected: true,
            notificationType: type
        })
    }
    let options = {
        'headers': {
            'Content-Type': 'application/json',
        },
    };
    AsyncStorage.getItem('jwt').then((value) => {
        axios.defaults.headers.common["Authorization"] = value;
    });
    let data = {
      "id": this.state.userId,
      "firstName": this.state.firstName,
      "lastName": this.state.lastName,
      "phoneNumber": this.state.phoneNumber,
      "company": this.state.company,
      "notificationType": this.state.notificationType
    };
    return axios
        .put(`${url}/api/users/${this.state.userId}`, data, options)
        .then(response => {
            console.log("UPDATED USER SUCCESSFULLY: ", JSON.stringify(response));
            return;
        })
        .catch(error => {
            console.log("ERROR WITH UPDATING USER", JSON.stringify(error.response));
            return;
        });
  };


  render() {
        return (
            <View style={styles.container} backgroundColor='#303030'>
                <View style={styles.navbar}>
                    <Text style={styles.title}>Notification Settings</Text>
                    <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
                        <Image
                            source={require("../../assets/images/backWhite.png")}
                        />
                    </TouchableHighlight>
                </View>
                <View style={styles.subContainer}>
                   <Text style={styles.subText}>Email</Text>
                   <Switch
                     onValueChange={value => this.changeNotificationType("EMAIL")}
                     style={{marginBottom: 40}}
                     value={this.state.emailSelected}
                   />
                </View>
                <View style={styles.subContainer}>
                   <Text style={styles.subText}>Text</Text>
                   <Switch
                     onValueChange={value => this.changeNotificationType("SMS")}
                     style={{marginBottom: 40}}
                     value={this.state.textSelected}
                   />
                </View>
                <View style={styles.subContainer}>
                   <Text style={styles.subText}>Both Email and Text</Text>
                   <Switch
                     onValueChange={value => this.changeNotificationType("ALL")}
                     style={{marginBottom: 40}}
                     value={this.state.bothSelected}
                   />
                </View>
            </View>
        );
    }
  }

export default NotificationSettingsScreen;
