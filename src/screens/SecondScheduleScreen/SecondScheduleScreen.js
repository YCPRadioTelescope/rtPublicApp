import {Image, Text, TextInput, TouchableHighlight, View} from 'react-native';
import React from 'react';
import styles from './styles';
import { Dropdown } from 'react-native-material-dropdown';
import { Checkbox } from 'react-native-paper';
import {schedulePointAppointment} from './schedulingAction';
import AsyncStorage from '@react-native-community/async-storage';
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";

class SecondScheduleScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            selectedTelescope: null,
            selectedTelescopeId: 0,
            selectedAppointmentType: null,
            selectedAscensionHours: 0,
            selectedAscensionMinutes: 0,
            selectedAscensionSeconds: 0,
            selectedDeclination: 0,
            startTime: '',
            endTime: '',
            userId: 0,
        };
        this.scheduleAppointment = this.scheduleAppointment.bind(this);
        AsyncStorage.getItem('starttime').then((value) => {
            this.state.startTime = JSON.parse(value);
        });

        AsyncStorage.getItem('endtime').then((value) => {
            this.state.endTime = JSON.parse(value);
        });

        AsyncStorage.getItem('userid').then((value) => {
            this.state.userId = JSON.parse(value);
        });
    }

    scheduleAppointment () {

        if (this.state.selectedTelescope == 'John C. Rudy County Park'){
            this.state.selectedTelescopeId = 1;
        } else if (this.state.selectedTelescope == 'Scale Model'){
            this.state.selectedTelescopeId = 2;
        } else if (this.state.selectedTelescope == 'Virtual'){
            this.state.selectedTelescopeId = 3;
        }

        this.props.schedulePointAppointment(this.state.userId, this.state.startTime, this.state.endTime, this.state.selectedTelescopeId, !this.state.checked, this.state.selectedAscensionHours, this.state.selectedAscensionMinutes, this.state.selectedAscensionSeconds, this.state.selectedDeclination).then(response => {
            if (response.type == "APPOINTMENT_SUCCESS"){
                console.log("Appointment successfully scheduled: ", JSON.stringify(response));
                alert("Successfully submitted appointment for review");
                this.autoHome();
            } else {
                alert("Looks like something went wrong. Please try again later.");
            }
        });

    }

    autoHome = () =>  {
        this.props.navigation.navigate("Home");
    }

    render() {
        const { checked } = this.state;

        let telescopeData = [{
            value: 'John C. Rudy County Park',
        }, {
            value: 'Scale Model',
        }, {
            value: 'Virtual',
        }];

        let typeData = [{
            value: 'Point',
        }, {
            value: 'Celestial Body',
        }, {
            value: 'Drift Scan',
        },{
            value: 'Raster Scan',
        }];

        let possibleHours = [{
            value: 0,
        },{
            value: 1,
        },{
            value: 2,
        },{
            value: 3,
        },{
            value: 4,
        },{
            value: 5,
        },{
            value: 6,
        },{
            value: 7,
        },{
            value: 8,
        },{
            value: 9,
        },{
            value: 10,
        },{
            value: 11,
        },{
            value: 12,
        },{
            value: 13,
        },{
            value: 14,
        },{
            value: 15,
        },{
            value: 16,
        },{
            value: 17,
        },{
            value: 18,
        },{
            value: 19,
        },{
            value: 20,
        },{
            value: 21,
        },{
            value: 22,
        },{
            value: 23,
        }];

        let possibleMinutesOrSeconds = [{
            value: 0,
        },{
            value: 1,
        },{
            value: 2,
        },{
            value: 3,
        },{
            value: 4,
        },{
            value: 5,
        },{
            value: 6,
        },{
            value: 7,
        },{
            value: 8,
        },{
            value: 9,
        },{
            value: 10,
        },{
            value: 11,
        },{
            value: 12,
        },{
            value: 13,
        },{
            value: 14,
        },{
            value: 15,
        },{
            value: 16,
        },{
            value: 17,
        },{
            value: 18,
        },{
            value: 19,
        },{
            value: 20,
        },{
            value: 21,
        },{
            value: 22,
        },{
            value: 23,
        },{
            value: 24,
        },{
            value: 25,
        },{
            value: 26,
        },{
            value: 27,
        },{
            value: 28,
        },{
            value: 29,
        },{
            value: 30,
        },{
            value: 31,
        },{
            value: 32,
        },{
            value: 33,
        },{
            value: 34,
        },{
            value: 35,
        },{
            value: 36,
        },{
            value: 37,
        },{
            value: 38,
        },{
            value: 39,
        },{
            value: 40,
        },{
            value: 41,
        },{
            value: 42,
        },{
            value: 43,
        },{
            value: 44,
        },{
            value: 45,
        },{
            value: 46,
        },{
            value: 47,
        },{
            value: 48,
        },{
            value: 49,
        },{
            value: 50,
        },{
            value: 51,
        },{
            value: 52,
        },{
            value: 53,
        },{
            value: 54,
        },{
            value: 55,
        },{
            value: 56,
        },{
            value: 57,
        },{
            value: 58,
        },{
            value: 59,
        }];

        let declinationData = [{
            value: 90,
        },{
            value: 89,
        },{
            value: 88,
        },{
            value: 87,
        },{
            value: 86,
        },{
            value: 85,
        },{
            value: 84,
        },{
            value: 83,
        },{
            value: 82,
        },{
            value: 81,
        },{
            value: 80,
        },{
            value: 79,
        },{
            value: 78,
        },{
            value: 77,
        },{
            value: 76,
        },{
            value: 75,
        },{
            value: 74,
        },{
            value: 73,
        },{
            value: 72,
        },{
            value: 71,
        },{
            value: 70,
        },{
            value: 69,
        },{
            value: 68,
        },{
            value: 67,
        },{
            value: 66,
        },{
            value: 65,
        },{
            value: 64,
        },{
            value: 63,
        },{
            value: 62,
        },{
            value: 61,
        },{
            value: 60,
        },{
            value: 59,
        },{
            value: 58,
        },{
            value: 57,
        },{
            value: 56,
        },{
            value: 55,
        },{
            value: 54,
        },{
            value: 53,
        },{
            value: 52,
        },{
            value: 51,
        },{
            value: 50,
        },{
            value: 49,
        },{
            value: 48,
        },{
            value: 47,
        },{
            value: 46,
        },{
            value: 45,
        },{
            value: 44,
        },{
            value: 43,
        },{
            value: 42,
        },{
            value: 41,
        },{
            value: 40,
        },{
            value: 39,
        },{
            value: 38,
        },{
            value: 37,
        },{
            value: 36,
        },{
            value: 35,
        },{
            value: 34,
        },{
            value: 33,
        },{
            value: 32,
        },{
            value: 31,
        },{
            value: 30,
        },{
            value: 29,
        },{
            value: 28,
        },{
            value: 27,
        },{
            value: 26,
        },{
            value: 25,
        },{
            value: 24,
        },{
            value: 23,
        },{
            value: 22,
        },{
            value: 21,
        },{
            value: 20,
        },{
            value: 19,
        },{
            value: 18,
        },{
            value: 17,
        },{
            value: 16,
        },{
            value: 15,
        },{
            value: 14,
        },{
            value: 13,
        },{
            value: 12,
        },{
            value: 11,
        },{
            value: 10,
        },{
            value: 9,
        },{
            value: 8,
        },{
            value: 7,
        },{
            value: 6,
        },{
            value: 5,
        },{
            value: 4,
        },{
            value: 3,
        },{
            value: 2,
        },{
            value: 1,
        },{
            value: 0,
        },{
            value: -1,
        },{
            value: -2,
        },{
            value: -3,
        },{
            value: -4,
        },{
            value: -5,
        },{
            value: -6,
        },{
            value: -7,
        },{
            value: -8,
        },{
            value: -9,
        },{
            value: -10,
        },{
            value: -11,
        },{
            value: -12,
        },{
            value: -13,
        },{
            value: -14,
        },{
            value: -15,
        },{
            value: -16,
        },{
            value: -17,
        },{
            value: -18,
        },{
            value: -19,
        },{
            value: -20,
        },{
            value: -21,
        },{
            value: -22,
        },{
            value: -23,
        },{
            value: -24,
        },{
            value: -25,
        },{
            value: -26,
        },{
            value: -27,
        },{
            value: -28,
        },{
            value: -29,
        },{
            value: -30,
        },{
            value: -31,
        },{
            value: -32,
        },{
            value: -33,
        },{
            value: -34,
        },{
            value: -35,
        },{
            value: -36,
        },{
            value: -37,
        },{
            value: -38,
        },{
            value: -39,
        },{
            value: -40,
        },{
            value: -41,
        },{
            value: -42,
        },{
            value: -43,
        },{
            value: -44,
        },{
            value: -45,
        },{
            value: -46,
        },{
            value: -47,
        },{
            value: -48,
        },{
            value: -49,
        },{
            value: -50,
        },{
            value: -51,
        },{
            value: -52,
        },{
            value: -53,
        },{
            value: -54,
        },{
            value: -55,
        },{
            value: -56,
        },{
            value: -57,
        },{
            value: -58,
        },{
            value: -59,
        },{
            value: -60,
        },{
            value: -61,
        },{
            value: -62,
        },{
            value: -63,
        },{
            value: -64,
        },{
            value: -65,
        },{
            value: -66,
        },{
            value: -67,
        },{
            value: -68,
        },{
            value: -69,
        },{
            value: -70,
        },{
            value: -71,
        },{
            value: -72,
        },{
            value: -73,
        },{
            value: -74,
        },{
            value: -75,
        },{
            value: -76,
        },{
            value: -77,
        },{
            value: -78,
        },{
            value: -79,
        },{
            value: -80,
        },{
            value: -81,
        },{
            value: -82,
        },{
            value: -83,
        },{
            value: -84,
        },{
            value: -85,
        },{
            value: -86,
        },{
            value: -87,
        },{
            value: -88,
        },{
            value: -89,
        },{
            value: -90,
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
              <View style={styles.contents}>
                  <View style={styles.dropdown}>
                      <Dropdown
                          label='Telescope'
                          data={telescopeData}
                          onChangeText={(value) => {this.setState({selectedTelescope: value})}}
                      />
                  </View>
                  <View style={styles.dropdown}>
                      <Dropdown
                          label='Appointment type'
                          data={typeData}
                          onChangeText={(value) => {this.setState({selectedAppointmentType: value})}}
                      />
                  </View>
                  <View style={styles.dropdown}>
                      <TextInput
                          placeholder='Right Ascension Hours (Choose: 0 to 23)'
                          data={possibleHours}
                          onChangeText={(value) => {this.setState({selectedAscensionHours: value})}}
                          keyboardType={'numeric'}
                      />
                  </View>
                  <View style={styles.dropdown}>
                      <TextInput
                          placeholder='Right Ascension Minutes (Choose: 0 to 59)'
                          data={possibleMinutesOrSeconds}
                          onChangeText={(value) => {this.setState({selectedAscensionMinutes: value})}}
                          keyboardType={'numeric'}
                      />
                  </View>
                  <View style={styles.dropdown}>
                      <TextInput
                          placeholder='Right Ascension Seconds (Choose: 0 to 59)'
                          data={possibleMinutesOrSeconds}
                          onChangeText={(value) => {this.setState({selectedAscensionSeconds: value})}}
                          keyboardType={'numeric'}
                      />
                  </View>
                  <View style={styles.dropdown}>
                      <TextInput
                          placeholder='Declination (Choose: -90 to 90)'
                          data={declinationData}
                          onChangeText={(value) => {this.setState({selectedDeclination: value})}}
                          keyboardType={'numeric'}
                      />
                  </View>
                  <View style={styles.private}>
                      <Text style={styles.privateText}>Private</Text>
                      <Checkbox
                          status={checked ? 'checked' : 'unchecked'}
                          onPress={() => { this.setState({ checked: !checked }); }}
                          color={ 'rgba(129,122,223,1)'}
                      />
                  </View>
                  <TouchableHighlight onPress={() => this.scheduleAppointment()} style={styles.submitButton}>
                      <Text style={styles.buttonText}>SUBMIT</Text>
                  </TouchableHighlight>
              </View>

          </View>
      );
  }
}

const mapStateToProps = state => {
//    const { scheduledAppointment } = state;
    //console.log("Getting public appoints = state in MapStateToProps",appoints);
    return {
//        appointment: scheduledAppointment,
//        errorResponse: scheduledAppointment.errorResponse,
//        errorMessage: scheduledAppointment.errorMessage
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            schedulePointAppointment,
        },
        dispatch
    );


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SecondScheduleScreen);
