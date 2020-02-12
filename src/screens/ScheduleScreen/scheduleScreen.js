import {Image, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import styles from './styles';
import CalendarPicker from 'react-native-calendar-picker';
import TimePicker from "react-native-24h-timepicker";
import moment from 'moment';

class ScheduleScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date, hour, minute) {
        console.log(hour);
        if(hour != null && minute != null){
            date = moment(date);
            date.hour(hour);
            date.minute(minute);
            this.TimePicker.close();
        }
        this.setState({
            selectedStartDate: date,
        });

    }

    onCancel() {
        this.TimePicker.close();
    }





    render() {
      const { selectedStartDate } = this.state;
      const startDate = selectedStartDate ? selectedStartDate.toString() : '';
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
                  <CalendarPicker
                      onDateChange={this.onDateChange}
                      selectedDayColor={'rgba(129,122,223,1)'}
                      selectedDayTextColor={'white'}
                  />

                  <View>
                      {selectedStartDate !=null &&
                        <Text style={styles.selected}>{moment(startDate).format('LLL')  }</Text>
                      }
                      {selectedStartDate ==null &&
                      <Text style={styles.selected}> Select your date and time. </Text>
                      }

                  </View>

                  <TouchableHighlight
                      onPress={() => this.TimePicker.open()}
                      style={styles.button}
                  >
                      <Text style={styles.buttonText}>Select a time</Text>
                  </TouchableHighlight>

                  <TouchableHighlight style={styles.nextButton}>
                      <Text style={styles.buttonText}>NEXT</Text>
                  </TouchableHighlight>

                  <TimePicker
                      ref={ref => {
                          this.TimePicker = ref;
                      }}
                      onCancel={() => this.onCancel()}
                      onConfirm={(hour, minute) => this.onDateChange(startDate, hour, minute)}
                  />
              </View>


          </View>
      );
  }
}

export default ScheduleScreen ;
