import {Image, ScrollView, Text, TouchableHighlight, View, Switch} from 'react-native';
import React from 'react';
import styles from './styles';
import ScrollElements from "../../components/scrollview/ScrollView";
import AWS from 'aws-sdk';
import { CheckBox } from 'react-native-elements';


class NotificationSettingsScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          completedAppointmentsSwitchOn: false,
          appointmentModifiedOrCancelled: false,
          publicAppointmentsSwitchOn: false,
      };
  }


//  AWS.config.update({region: 'REGION'});
//
//  var params = {
//    Protocol: 'application', /* required */
//    TopicArn: 'TOPIC_ARN', /* required */
//    Endpoint: 'MOBILE_ENDPOINT_ARN'
//  };

  render() {
    console.log('Notifciations', this.props.auth);
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
                <Text style={styles.subTitle}>Customize your notification content</Text>
                <View style={styles.subContainer}>
                   <Text style={styles.subText}>Appointment Completed</Text>
                   <Switch
                     onValueChange={value => this.setState({completedAppointmentsSwitchOn: value})}
                     style={{marginBottom: 40}}
                     value={this.state.completedAppointmentsSwitchOn}
                   />
                </View>
                <View style={styles.subContainer}>
                   <Text style={styles.subText}>Appointment modified or cancelled</Text>
                   <Switch
                     onValueChange={value => this.setState({appointmentModifiedOrCancelled: value})}
                     style={{marginBottom: 40}}
                     value={this.state.appointmentModifiedOrCancelled}
                   />
                </View>
                <View style={styles.subContainer}>
                   <Text style={styles.subText}>New public appointments are created</Text>
                   <Switch
                     onValueChange={value => this.setState({publicAppointmentsSwitchOn: value})}
                     style={{marginBottom: 40}}
                     value={this.state.publicAppointmentsSwitchOn}
                   />
                </View>
            </View>
        );
    }
  }

export default NotificationSettingsScreen;
