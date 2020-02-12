import {Image, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import styles from './styles';

class SecondScheduleScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
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
                  
              </View>


          </View>
      );
  }
}

export default SecondScheduleScreen ;
