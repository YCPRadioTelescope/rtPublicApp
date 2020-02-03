import {Image, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import styles from './styles';

class PublicScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Public Appointments Screen</Text>
        <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
          <Image
            source={require("../../assets/images/back.png")}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

export default PublicScreen;