import {Image, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import styles from './styles';
import CalendarPicker from 'react-native-calendar-picker';
import Picker from 'react-native-picker';
import moment from 'moment';

class ScheduleScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
            dateSelected: false,
            timeSelected: false,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date, hour, minute, meridiem) {
        if(hour != null && minute != null){
            date = moment(date);
            // Convert to 24-hr format
            if(meridiem == "PM"){
                if(hour >=1 || hour<=11 ){
                    console.log(hour);
                    hour+=12
                }
                else if(hour==12){
                    hour = 0;
                }
            }
            date.hour(hour);
            date.minute(minute);
            this.setState({
                timeSelected:true,
            });
        }
        this.setState({
            dateSelected:true,
            selectedStartDate: date,
        });
    }

    onCancel() {
        this.TimePicker.close();
    }


    _showTimePicker() {
        let hours = [],
            minutes = [];
        for(let i=1;i<13;i++){
            hours.push(i);
        }
        for(let i=1;i<61;i++){
            minutes.push(i);
        }
        let pickerData = [hours, minutes, ['AM', 'PM']];

        Picker.init({
            pickerData,
            pickerTitleText: 'Select Time',
            wheelFlex: [1, 1, 2],
            onPickerConfirm: pickedValue => {
                console.log('area', pickedValue);
                var minute = parseInt(pickedValue[1]);
                var hour = parseInt(pickedValue[0]);
                this.onDateChange(this.state.selectedStartDate, hour, minute, pickedValue[2]);
            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                let targetValue = [...pickedValue];
                // forbidden some value such as some 2.29, 4.31, 6.31...
                if(JSON.stringify(targetValue) !== JSON.stringify(pickedValue)){
                    // android will return String all the time，but we put Number into picker at first
                    // so we need to convert them to Number again
                    targetValue.map((v, k) => {
                        if(k !== 3){
                            targetValue[k] = parseInt(v);
                        }
                    });
                    Picker.select(targetValue);
                }
            }
        });
        Picker.show();
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


                  <TouchableHighlight style={styles.button} onPress={this._showTimePicker.bind(this)} disabled={!this.state.dateSelected}>
                      <Text style={styles.buttonText}>Select a time</Text>
                  </TouchableHighlight>

                  <TouchableHighlight onPress={() => this.props.navigation.navigate('Second')} style={styles.nextButton} disabled={!this.state.timeSelected}>
                      <Text style={styles.buttonText}>NEXT</Text>
                  </TouchableHighlight>


              </View>


          </View>
      );
  }
}

export default ScheduleScreen ;
