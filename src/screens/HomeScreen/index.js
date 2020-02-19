import {Text, View, TouchableHighlight, Image} from 'react-native';
import React from 'react';
import {bindActionCreators} from 'redux';
import {login} from '../LoginScreen/AuthActions';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import LinearGradient from "react-native-linear-gradient";

class HomeScreen extends React.Component {

  logout = () => {
    console.log('logout');
    AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  };
  feedback = () => {
    console.log('feedback');
    this.props.navigation.navigate('Feedback');
  };

  render() {
    console.log('user', this.props.auth);
    return (
        <LinearGradient colors={['#041628', '#1D364D' , '#1D364D']} style={styles.gradient }>

          <View style={styles.navbar}>
            <TouchableHighlight onPress={this.logout} style={styles.logoutButton}>
              <View>
                <Text style={styles.buttonText}>Logout</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.feedback} style={styles.feedbackButton}>
              <View>
                <Text style={styles.buttonText}>Feedback</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.container}>
            <TouchableHighlight onPress={() => {this.props.navigation.navigate('Schedule')}} style={styles.scheduleButton}>
              <View>
                <Text style={styles.scheduleButtonText}> Schedule appointments </Text>
              </View>
            </TouchableHighlight>

            <View style={styles.row1}>
              <TouchableHighlight onPress={() => {this.props.navigation.navigate('Public')}} style={styles.button}>
                <View>
                  <Image
                      source={require("../../assets/images/publicIconWhite.png")}
                      style={styles.iconImage }
                  />
                  <Text style={styles.buttonText}> Public Appointments</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {this.props.navigation.navigate('Search')}} style={styles.button}>
                <View>
                  <Image
                      source={require("../../assets/images/searchIconWhite.png")}
                      style={styles.iconImage }
                  />
                  <Text style={styles.buttonText}> Search Appointments</Text>
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.row2}>
              <TouchableHighlight onPress={() => {this.props.navigation.navigate('Complete')}} style={styles.button}>
                <View>
                  <Image
                      source={require("../../assets/images/finishedWhite.png")}
                      style={styles.iconImage }
                  />
                  <Text style={styles.buttonText}> My Complete Appointments</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {this.props.navigation.navigate('Future')}} style={styles.button}>
                <View>
                  <Image
                      source={require("../../assets/images/futureIconWhite.png")}
                      style={styles.futureIconImage }
                  />
                  <Text style={styles.futureButtonText}> Future Appointments</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </LinearGradient>

    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return {
    auth: user.auth,
    errorResponse: user.auth.errorResponse,
    errorMessage: user.auth.errorMessage
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
