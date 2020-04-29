import {Text, View, TouchableHighlight, TextInput, Dimensions, ImageBackground, StyleSheet, Image} from 'react-native';
import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import {login} from './AuthActions';
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import Galaxy from '../../components/galaxy/Galaxy.js';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const url = "https://prod-api.ycpradiotelescope.com";

class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      emailAddress: this.props.auth.emailAddress || "",
      password: this.props.auth.password || "",
      showPassword: true,
      icEye: "eye-off-outline"
    };
  }

  indexLogin = async () => {
    this.props.login(this.state.emailAddress, this.state.password).then(response => {
      if (response.type === "LOGIN_SUCCESS") {
        console.log("Credentials are good.");
        this.autoHome();
      } else {
        alert("Looks like the stars did not align correctly!  Please try to login again.")
      }
    });
  };

  autoHome = () =>  {
    this.props.navigation.navigate("Home");
  }

  autoCreate = () => {
    this.props.navigation.navigate("Create");
  }

  render() {
    return (
      <View>
        <Galaxy style={{ width:'100%', height: '100%'}} />
        <View style={styles.navbar}>
          <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
            <Image
                source={require("../../assets/images/backWhite.png")}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}> YCAS Radio Telescope Scheduler </Text>
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            placeholderTextColor="white"
            value={this.state.emailAddress}
            onChangeText={emailAddress => this.setState({ emailAddress })}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={this.state.showPassword}
            autoCapitalize="none"
            placeholderTextColor="white"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            style={styles.textInput}

          />
          <TouchableHighlight onPress={this.indexLogin.bind(this)} style={styles.button}>
            <View>
              <Text style={styles.buttonText}> LOGIN </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.autoCreate} style={styles.button}>
            <View>
              <Text style={styles.buttonText}> New Account </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}


//  <TouchableHighlight onPress={this.autoHome} style={styles.button}>
//    <View>
//      <Text style={styles.buttonText}> TEMP Home Button </Text>
//    </View>
//  </TouchableHighlight>

const mapStateToProps = state => {
  const { user } = state;
  return {
    auth: user.auth,
    errorResponse: user.errorResponse,
    errorMessage: user.errorMessage
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
)(LoginScreen);
