import {Image, ScrollView, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import styles from './styles';
import ScrollElements from "../../components/scrollview/ScrollView";

class PublicScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          appointments: 0,
      };
  }
  render() {
    console.log('Public', this.props.auth);
    if(!this.state.appointments){
        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <Text style={styles.title}>Public Appointments Screen</Text>
                    <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
                        <Image
                            source={require("../../assets/images/backWhite.png")}
                        />
                    </TouchableHighlight>
                </View>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Schedule')} style={styles.back}>
                    <View style = {styles.item}>
                        <Text style = {styles.name}>No Public Appointments </Text>
                        <Text style = {styles.type}>There are no completed public observations </Text>
                        <Text style = {styles.type}>Tap here to add an appointment </Text>
                    </View>
                </TouchableHighlight>

            </View>
        );
    }
    else{
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Public Appointments Screen</Text>
                <View style={styles.navbar}>
                    <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
                        <Image
                            source={require("../../assets/images/backWhite.png")}
                        />
                    </TouchableHighlight>
                </View>

                <View style={styles.scroll}>
                    <ScrollElements />
                </View>
            </View>
        );
    }

  }
}

export default PublicScreen;
