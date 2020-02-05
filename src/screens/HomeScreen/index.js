import {Text, View, TouchableHighlight} from 'react-native';
import React from 'react';
import {bindActionCreators} from 'redux';
import {login} from '../LoginScreen/AuthActions';
import {connect} from 'react-redux';
import { AsyncStorage } from "react-native";
import styles from './styles';
import LinearGradient from "react-native-linear-gradient";

class HomeScreen extends React.Component {

  logout = () => {
    console.log('logout');
    AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  };

  render() {
    console.log('user', this.props.auth);
    return (
        <LinearGradient colors={['#041628', '#1D364D']} style={styles.gradient }>

          <View style={styles.navbar}>
            <TouchableHighlight onPress={this.logout} style={styles.logoutButton}>
              <View>
                <Text>Logout</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.container}>
            <TouchableHighlight onPress={() => {this.props.navigation.navigate('Schedule')}} style={styles.scheduleButton}>
              <View>
                <Text style={{fontSize:18}}> Schedule appointments </Text>
              </View>
            </TouchableHighlight>

            <View style={styles.row1}>
              <TouchableHighlight onPress={() => {this.props.navigation.navigate('Public')}} style={styles.button}>
                <View>
                  <Text> Public Appointments Screen </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {this.props.navigation.navigate('Search')}} style={styles.button}>
                <View>
                  <Text> Search Appointments Screen </Text>
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.row2}>
              <TouchableHighlight onPress={() => {this.props.navigation.navigate('Complete')}} style={styles.button}>
                <View>
                  <Text> My Complete Appointments Screen </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {this.props.navigation.navigate('Future')}} style={styles.button}>
                <View>
                  <Text> Future Appointments Screen </Text>
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
