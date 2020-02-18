import {Image, Text, TouchableHighlight, View} from 'react-native';
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
        query:'',
    }

    search(nameKey, myArray){
        let newArray=[];
        for ( let i=0; i < myArray.length; i++) {
            if (myArray[i].name === nameKey) {
                newArray.push(myArray[i]);
            }
        }
        return newArray;
    }

    updateSearch = query => {
        this.setState({ query });
        const appointments = this.state;
        if (query === '') {
            return [];
        }
        const regex = new RegExp(`${query.trim()}`, 'i');
        return this.search(regex, appointments);
        // TODO: populate results list

    };



  render() {
      const { query } = this.state;
    return (
      <View style={styles.container}>
        <Text>Search Appointments Screen</Text>
          <View style={styles.navbar}>
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
              containerStyle={{width:'100%'}}
          />

      </View>
    );
  }
}

export default SearchScreen ;
