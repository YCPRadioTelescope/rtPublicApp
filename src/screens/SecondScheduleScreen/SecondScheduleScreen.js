import {Image, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import styles from './styles';
import { Dropdown } from 'react-native-material-dropdown';
import { Checkbox } from 'react-native-paper';

class SecondScheduleScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked:false,
        };
    }



    render() {
        const { checked } = this.state;

        let data = [{
            value: 'Banana',
        }, {
            value: 'Mango',
        }, {
            value: 'Pear',
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
                          data={data}
                      />
                  </View>
                  <View style={styles.dropdown}>
                      <Dropdown
                          label='Appointment type'
                          data={data}
                      />
                  </View>
                  <View style={styles.dropdown}>
                      <Dropdown
                          label='Right Ascension Hours'
                          data={data}
                      />
                  </View>
                  <View style={styles.dropdown}>
                      <Dropdown
                          label='Right Ascension Minutes'
                          data={data}
                      />
                  </View>
                  <View style={styles.dropdown}>
                      <Dropdown
                          label='Declination'
                          data={data}
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
                  <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')} style={styles.submitButton}>
                      <Text style={styles.buttonText}>SUBMIT</Text>
                  </TouchableHighlight>
              </View>



          </View>
      );
  }
}

export default SecondScheduleScreen ;
