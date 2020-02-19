import {Image, ScrollView, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import styles from './styles';
import { SearchBar } from 'react-native-elements';

class SearchScreen extends React.Component {


    constructor(props) {
        super(props);
    }

    state = {
        appointments:[
            {'name': 'Ben', 'id': 1, 'type': 'CELESTIAL_BODY', 'RightAscension': 10.3, 'Declination':50.8},
            {'name': 'Susan', 'id': 2, 'type': 'DRIFT_SCAN', 'RightAscension': 10.3, 'Declination':50.8},
            {'name': 'Robert', 'id': 3, 'type': 'DRIFT_SCAN', 'RightAscension': 10.3, 'Declination':50.8},
            {'name': 'Mary', 'id': 4, 'type': 'DRIFT_SCAN', 'RightAscension': 10.3, 'Declination':50.8},
            {'name': 'Daniel', 'id': 5, 'type': 'DRIFT_SCAN', 'RightAscension': 10.3, 'Declination':50.8},
            {'name': 'Laura', 'id': 6, 'type': 'DRIFT_SCAN', 'RightAscension': 10.3, 'Declination':50.8},
            {'name': 'John', 'id': 7, 'type': 'DRIFT_SCAN', 'RightAscension': 10.3, 'Declination':50.8},
            {'name': 'Debra', 'id': 8, 'type': 'DRIFT_SCAN', 'RightAscension': 10.3, 'Declination':50.8},
            {'name': 'Aron', 'id': 9, 'type': 'DRIFT_SCAN', 'RightAscension': 10.3, 'Declination':50.8},
            {'name': 'Ann', 'id': 10, 'type': 'DRIFT_SCAN', 'RightAscension': 10.3, 'Declination':50.8},
            {'name': 'Steve', 'id': 11, 'type': 'DRIFT_SCAN', 'RightAscension': 10.3, 'Declination':50.8},
            {'name': 'Olivia', 'id': 12, 'type': 'DRIFT_SCAN', 'RightAscension': 10.3, 'Declination':50.8}
        ],
        results:[],
        query:'',
    }

    search(nameKey, myArray){
        let newArray=[];
        for (let i=0; i < myArray.length; i++) {
            if (myArray[i].name.toLowerCase().includes(nameKey)) {
                newArray.push(myArray[i]);
            }
        }
        return newArray;
    }

    updateSearch = query => {
        this.setState({ query });
        const appointments = this.state.appointments;
        if (query === '') {
            return [];
        }
        query = query.trim().toLowerCase();
        this.setState({
            results: this.search(query, appointments),
        });

    };

    renderAppointment(){
        return (

            <ScrollView style = {styles.allResults}>
                {
                    this.state.results.map((item) => (
                        <View key = {item.id} style = {styles.result}>
                            <View style = {styles.text}>
                                <Text style = {styles.name}>{item.name}'s Appointment</Text>
                                <Text style = {styles.type}>{item.type}</Text>
                                <Text style = {styles.RightAscension}> RightAscension: {item.RightAscension}</Text>
                                <Text style = {styles.Declination}> Declination: {item.Declination}</Text>
                            </View>
                        </View>
                    ))
                }

            </ScrollView>
        );
    }



  render() {
      const { query } = this.state;
    return (
      <View style={styles.container}>
          <View style={styles.navbar}>
              <Text style={styles.title}>Search</Text>
              <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
                  <Image
                      source={require("../../assets/images/backWhite.png")}
                  />
              </TouchableHighlight>
          </View>

          <SearchBar
              placeholder="Type Here..."
              onChangeText={this.updateSearch}
              value={query}
              containerStyle={styles.searchBar}
          />

          <View >
              {this.state.results.length > 0 ? (
                  this.renderAppointment()
              ) : (
                  <Text style={styles.infoText}>
                      Search for an appointment
                  </Text>
              )}
          </View>

      </View>
    );
  }
}

export default SearchScreen ;
