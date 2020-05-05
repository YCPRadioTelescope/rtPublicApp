import {Alert, Image, Text, TextInput, TouchableHighlight, View, Switch} from 'react-native';
import React from 'react';
import styles from './styles';
import { Dropdown } from 'react-native-material-dropdown';
import {schedulePointAppointment} from './schedulingAction';
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';
import { SearchBar, CheckBox } from 'react-native-elements';
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";

const url = "http://api.ycpradiotelescope.com:8080";

class SecondScheduleScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            hideSubmit: true,
            celestialSearchSubmitted: false,
            selectedTelescope: null,
            selectedTelescopeId: 0,
            selectedAppointmentType: null,
            selectedAscensionHours: 0,
            selectedAscensionMinutes: 0,
            selectedAscensionSeconds: 0,
            selectedDeclination: 0,
            selectedAzimuth: 0,
            selectedElevation: 0,
            startTime: '',
            endTime: '',
            userId: 0,
            results: [],
            celestialBodies: [],
            celestialBodiesDetail: [],
            query: '',
            selectedBody: '',
            selectedBodyID: 0,
            showCelestials: false,
        };
        this.scheduleAppointment = this.scheduleAppointment.bind(this);
        this._getCelestialData = this._getCelestialData.bind(this);
        this._scheduleCelestial = this._scheduleCelestial.bind(this);
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

        if (this.state.selectedTelescope == 'YCAS Telescope'){
            this.state.selectedTelescopeId = 1;
        } else if (this.state.selectedTelescope == 'Scale Model'){
            this.state.selectedTelescopeId = 2;
        } else if (this.state.selectedTelescope == 'Virtual'){
            this.state.selectedTelescopeId = 3;
        }

        this.props.schedulePointAppointment(this.state.userId, this.state.startTime, this.state.endTime, this.state.selectedTelescopeId, !this.state.checked, this.state.selectedAscensionHours, this.state.selectedAscensionMinutes, this.state.selectedAscensionSeconds, this.state.selectedDeclination).then(response => {
            if (response.type == "APPOINTMENT_SUCCESS"){
                console.log("Appointment successfully scheduled: ", JSON.stringify(response));
                alert("Successfully submitted point appointment");
                this.autoHome();
            } else {
                alert("Looks like something went wrong. Please try again later.");
            }
        });
    }


    scheduleCelestialAppointment(){
        if (this.state.selectedTelescope == 'YCAS Telescope'){
            this.state.selectedTelescopeId = 1;
        } else if (this.state.selectedTelescope == 'Scale Model'){
            this.state.selectedTelescopeId = 2;
        } else if (this.state.selectedTelescope == 'Virtual'){
            this.state.selectedTelescopeId = 3;
        }

        try {
            AsyncStorage.getItem('jwt').then((value) => {
                AsyncStorage.getItem('userid').then((val) => {
                    var search = 'name';
                    this._scheduleCelestial(value,JSON.parse(val),this.state.query,search);
                });
            });
        } catch(e) {
            console.log("Error loading data: ", e.message);
        }
    }

    _scheduleCelestial(jwt, userID){
        axios.defaults.headers.common["Content-Type"] = "application/json";
        axios.defaults.headers.common["Authorization"] = jwt;
        let data = {
          "userId": userID,
          "startTime": this.state.startTime,
          "endTime": this.state.endTime,
          "telescopeId": this.state.selectedTelescopeId,
          "isPublic": !this.state.checked,
          "priority": 'PRIMARY',
          "celestialBodyId": this.state.celestialBodyId
        };
        return axios
            .post(`${url}/api/appointments/schedule/celestial-body`, data)
            .then(response => {
                console.log("SUCCESSFULLY REQUESTED RESPONSE: ", JSON.stringify(response));
                alert('Successfully created celestial appointment');
                this.autoHome();
            })
            .catch(error => {
                console.log("ERROR WITH REQUESTED APPOINTMENT", JSON.stringify(error.response));
                alert('An error occurred, please try again later');
            });
    }

    _beginCelestialProcess(){
        this.setState({
            celestialBodies: []
        });
        try {
            AsyncStorage.getItem('jwt').then((value) => {
                AsyncStorage.getItem('userid').then((val) => {
                    var search = 'name';
                    this._getCelestialData(value,JSON.parse(val),this.state.query,search);
                });
            });
        } catch(e) {
            console.log("Error loading data: ", e.message);
        }
        return
    };

    _getCelestialData(jwt, userId, value, search) {
        axios.defaults.headers.common["Content-Type"] = "application/json";
        axios.defaults.headers.common["Authorization"] = jwt;
        return axios
            .get(`${url}/api/celestial-bodies/search?page=0&size=25&value=${value}&search=${search}`)
            .then(response => {
                console.log('SEARCH RESULTS: ', JSON.stringify(response))
                response.data.data.content.map(item => {
                    this.state.celestialBodies.push({ value: item.name });
                    this.state.celestialBodiesDetail.push({ value: item.name, id: item.id });
                    this.setState({
                        celestialBodyId: item.id
                    });
                })
                if(JSON.parse(response.data.data.numberOfElements) == 0){
                    this.buttonAlert(value);
                }else{
                    this.setState({
                        celestialSearchSubmitted: true
                    });
                }
            })
            .catch(error => {
                console.log('Error getting celestial data', error);
            });
    };

    scheduleDriftAppointment(){
        if (this.state.selectedTelescope == 'YCAS Telescope'){
            this.state.selectedTelescopeId = 1;
        } else if (this.state.selectedTelescope == 'Scale Model'){
            this.state.selectedTelescopeId = 2;
        } else if (this.state.selectedTelescope == 'Virtual'){
            this.state.selectedTelescopeId = 3;
        }

        try {
            AsyncStorage.getItem('jwt').then((value) => {
                AsyncStorage.getItem('userid').then((val) => {
                    var search = 'name';
                    this._scheduleDrift(value,JSON.parse(val));
                });
            });
        } catch(e) {
            console.log("Error loading data: ", e.message);
        }
    }

    _scheduleDrift(jwt, userID){
        axios.defaults.headers.common["Content-Type"] = "application/json";
        axios.defaults.headers.common["Authorization"] = jwt;
        let data = {
          "userId": userID,
          "startTime": this.state.startTime,
          "endTime": this.state.endTime,
          "telescopeId": this.state.selectedTelescopeId,
          "isPublic": !this.state.checked,
          "priority": 'PRIMARY',
          "azimuth": this.state.selectedAzimuth,
          "elevation": this.state.selectedElevation
        };
        return axios
            .post(`${url}/api/appointments/schedule/drift-scan`, data)
            .then(response => {
                console.log("SUCCESSFULLY REQUESTED RESPONSE: ", JSON.stringify(response));
                alert('Successfully created celestial appointment');
                this.autoHome();
            })
            .catch(error => {
                console.log("ERROR WITH REQUESTED APPOINTMENT", JSON.stringify(error.response));
                alert('An error occurred, please try again later');
            });
    }

    scheduleRasterScanAppointment(){
        if (this.state.selectedTelescope == 'YCAS Telescope'){
            this.state.selectedTelescopeId = 1;
        } else if (this.state.selectedTelescope == 'Scale Model'){
            this.state.selectedTelescopeId = 2;
        } else if (this.state.selectedTelescope == 'Virtual'){
            this.state.selectedTelescopeId = 3;
        }

        try {
            AsyncStorage.getItem('jwt').then((value) => {
                AsyncStorage.getItem('userid').then((val) => {
                    var search = 'name';
                    this._scheduleRasterScan(value,JSON.parse(val));
                });
            });
        } catch(e) {
            console.log("Error loading data: ", e.message);
        }
    }

    _scheduleRasterScan(jwt, userID){
        axios.defaults.headers.common["Content-Type"] = "application/json";
        axios.defaults.headers.common["Authorization"] = jwt;
        let data = {
          "userId": userID,
          "startTime": this.state.startTime,
          "endTime": this.state.endTime,
          "telescopeId": this.state.selectedTelescopeId,
          "isPublic": !this.state.checked,
          "priority": 'PRIMARY',
          "azimuth": this.state.selectedAzimuth,
          "elevation": this.state.selectedElevation
        };
        return axios
            .post(`${url}/api/appointments/schedule/raster-scan`, data)
            .then(response => {
                console.log("SUCCESSFULLY REQUESTED RESPONSE: ", JSON.stringify(response));
                alert('Successfully created celestial appointment');
                this.autoHome();
            })
            .catch(error => {
                console.log("ERROR WITH REQUESTED APPOINTMENT", JSON.stringify(error.response));
                alert('An error occurred, please try again later');
            });
    }

    buttonAlert(value){
        Alert.alert(
          "Sorry",
          "But there were 0 results from searching: '"+ this.state.query +"'",
          [
            {
              text: "Try Again"
            },
          ],
          { cancelable: false }
        );
    };

    updateSearch = query => {
        this.setState({ query });
        const appointments = this.state.appointments;
        if (query === '') {
            return [];
        }
        query = query.trim().toLowerCase();
    };

    autoHome = () =>  {
        this.props.navigation.navigate("Home");
    }

    render() {
        const { checked, selectedAppointmentType } = this.state;

        let telescopeData = [{
            value: 'YCAS Telescope',
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

      return (
          <View style={styles.container} backgroundColor={'#454545'}>
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
                        style = {{color: 'white', fontSize: 20}} //for changed text color
                        baseColor="rgba(255, 255, 255, 1)" //for initial text color
                        data={telescopeData}
                        onChangeText={(value) => {this.setState({selectedTelescope: value})}}
                    />
                  </View>
                  <View style={styles.dropdown}>
                    <Dropdown
                        label='Appointment type'
                        style = {{color: 'white', fontSize: 20}} //for changed text color
                        baseColor="rgba(255, 255, 255, 1)" //for initial text color
                        data={typeData}
                        onChangeText={(value) => {this.setState({selectedAppointmentType: value, hideSubmit: true})}}
                    />
                  </View>
                    {(this.state.selectedAppointmentType == 'Celestial Body' && this.state.celestialSearchSubmitted == false) && (
                        <View style={{ paddingVertical: 50, marginBottom: 20, marginTop: 30, alignItems: 'center' }}>
                            <SearchBar
                               placeholder="Enter the name of Celestial Body..."
                               onChangeText={this.updateSearch}
                               value={this.state.query}
                               containerStyle={styles.searchBar}
                            />
                            <TouchableHighlight onPress={() => this._beginCelestialProcess()} style={styles.submitButton}>
                              <Text style={styles.buttonText}>SEARCH</Text>
                            </TouchableHighlight>
                        </View>
                    )}
                    {(this.state.selectedAppointmentType == 'Celestial Body' && this.state.celestialSearchSubmitted == true) && (
                        <View style={styles.dropdown}>
                          <Dropdown
                              label='Select Celestial Body'
                              style = {{color: 'white', fontSize: 20}} //for changed text color
                              baseColor="rgba(255, 255, 255, 1)" //for initial text color
                              data={this.state.celestialBodies}
                              onChangeText={(value) => {this.setState({selectedBody: value, hideSubmit: true })
                                this.state.celestialBodiesDetail.forEach((element) => {
                                    if(element[value] === value){
                                        this.setState({
                                            selectedBodyID: element[id]
                                        });
                                    }
                                })
                              }}
                          />
                        </View>
                    )}
                    {(this.state.selectedAppointmentType == 'Drift Scan' || this.state.selectedAppointmentType == 'Raster Scan') &&
                    <View style={styles.numberInput}>
                        <TextInput
                              placeholder='Azimuth (Choose between 0 to 360)'
                              onChangeText={(value) => {this.setState({selectedAzimuth: value})}}
                              keyboardType={'numeric'}
                              placeholderTextColor="gray"
                              blurOnSubmit={false}
                              returnKeyType='done'
                        />
                    </View>}
                    {(this.state.selectedAppointmentType == 'Drift Scan' || this.state.selectedAppointmentType == 'Raster Scan') &&
                    <View style={styles.numberInput}>
                        <TextInput
                              placeholder='Elevation (Choose between 0 to 90)'
                              onChangeText={(value) => {this.setState({selectedElevation: value})}}
                              keyboardType={'numeric'}
                              placeholderTextColor="gray"
                              blurOnSubmit={false}
                              returnKeyType='done'
                        />
                    </View>}
                    {this.state.selectedAppointmentType == 'Point' &&
                    <View style={styles.numberInput}>
                        <TextInput
                              placeholder='Right Ascension Hours (Choose between 0 to 23)'
                              onChangeText={(value) => {this.setState({selectedAscensionHours: value})}}
                              keyboardType={'numeric'}
                              placeholderTextColor="gray"
                              blurOnSubmit={false}
                              returnKeyType='done'
                        />
                    </View>}
                    {this.state.selectedAppointmentType == 'Point' &&
                    <View style={styles.numberInput}>
                          <TextInput
                              placeholder='Right Ascension Minutes (Choose between 0 to 59)'
                              onChangeText={(value) => {this.setState({selectedAscensionMinutes: value})}}
                              keyboardType={'numeric'}
                              placeholderTextColor="gray"
                              blurOnSubmit={true}
                              returnKeyType='done'
                          />
                    </View>}
                    {this.state.selectedAppointmentType == 'Point' &&
                    <View style={styles.numberInput}>
                        <TextInput
                              placeholder='Right Ascension Seconds (Choose between 0 to 59)'
                              onChangeText={(value) => {this.setState({selectedAscensionSeconds: value})}}
                              keyboardType={'numeric'}
                              placeholderTextColor="gray"
                              blurOnSubmit={true}
                              returnKeyType='done'
                          />
                    </View>}
                    {this.state.selectedAppointmentType == 'Point' &&
                    <View style={styles.numberInput}>
                        <TextInput
                              placeholder='Declination (Choose between -90 and 90)'
                              onChangeText={(value) => {this.setState({selectedDeclination: value})}}
                              keyboardType={'numeric'}
                              placeholderTextColor="gray"
                              blurOnSubmit={true}
                              returnKeyType='done'
                          />
                    </View>}
                    <View style={styles.private}>
                        <CheckBox
                            center
                            title='Private'
                            checked={this.state.checked}
                            containerStyle={styles.checkBox}
                            checkedColor='green'
                            onPress={() => this.setState({checked: !this.state.checked})}
                        />
                    </View>

                  <View>
                      {(this.state.selectedAppointmentType == 'Point') &&
                      <TouchableHighlight onPress={() => this.scheduleAppointment()} style={styles.submitButton}>
                          <Text style={styles.buttonText}>SUBMIT</Text>
                      </TouchableHighlight>
                      }
                      {(this.state.selectedAppointmentType == 'Celestial Body') &&
                      <TouchableHighlight onPress={() => this.scheduleCelestialAppointment()} style={styles.submitButton}>
                          <Text style={styles.buttonText}>SUBMIT</Text>
                      </TouchableHighlight>
                      }
                      {(this.state.selectedAppointmentType == 'Drift Scan') &&
                      <TouchableHighlight onPress={() => this.scheduleDriftAppointment()} style={styles.submitButton}>
                          <Text style={styles.buttonText}>SUBMIT</Text>
                      </TouchableHighlight>
                      }
                      {(this.state.selectedAppointmentType == 'Raster Scan') &&
                      <TouchableHighlight onPress={() => this.scheduleRasterScanAppointment()} style={styles.submitButton}>
                          <Text style={styles.buttonText}>SUBMIT</Text>
                      </TouchableHighlight>
                      }
                  </View>
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
