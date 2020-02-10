import {Image, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import styles from './styles';
import CalendarPicker from 'react-native-calendar-picker';
import TimePicker from "react-native-24h-timepicker";

class ScheduleScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
            time:"",
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
    }

    onCancel() {
        this.TimePicker.close();
    }

    onConfirm(hour, minute) {
        this.setState({ time: `${hour}:${minute}` });
        this.TimePicker.close();
    }



    render() {
      const { selectedStartDate } = this.state;
      const startDate = selectedStartDate ? selectedStartDate.toString() : '';
      return (
          <View style={styles.container}>
            <Text>Schedule Appointments Screen</Text>
              <View style={styles.navbar}>
                  <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
                      <Image
                          source={require("../../assets/images/backWhite.png")}
                      />
                  </TouchableHighlight>
              </View>
              <CalendarPicker
                  onDateChange={this.onDateChange}
              />

              <View>
                  <Text>SELECTED DATE:{ startDate }</Text>
                  <Text>SELECTED TIME: {this.state.time}</Text>
              </View>

              <TouchableHighlight
                  onPress={() => this.TimePicker.open()}
                  style={styles.button}
              >
                  <Text style={styles.buttonText}>Select a time</Text>
              </TouchableHighlight>

              <TimePicker
                  ref={ref => {
                      this.TimePicker = ref;
                  }}
                  onCancel={() => this.onCancel()}
                  onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
              />


          </View>
      );
  }
}

export default ScheduleScreen ;
