import {Text, View, TouchableHighlight} from 'react-native';
import React from 'react';
import {bindActionCreators} from 'redux';
import {login} from '../LoginScreen/AuthActions';
import {connect} from 'react-redux';
import { AsyncStorage } from "react-native";
import styles from './styles';

class HomeScreen extends React.Component {

  logout = () => {
    console.log('logout');
    AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  };

  render() {
    console.log('user', this.props.auth);
    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Text>Home Screen</Text>
        <TouchableHighlight onPress={() => {this.props.navigation.navigate('Schedule')}} style={styles.button}>
          <View>
            <Text> Schedule appointments Screen </Text>
          </View>
        </TouchableHighlight>
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
        <TouchableHighlight onPress={this.logout} style={{marginTop: 20}}>
          <View>
            <Text> Press To Logout </Text>
          </View>
        </TouchableHighlight>
        </View>
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
