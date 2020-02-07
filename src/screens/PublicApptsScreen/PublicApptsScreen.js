import {Image, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import styles from './styles';

class PublicScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Public Appointments Screen</Text>
          <View style={styles.navbar}>
              <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
                  <Image
                      source={require("../../assets/images/backWhite.png")}
                  />
              </TouchableHighlight>
          </View>
      </View>
    );
  }
}

export default PublicScreen;
