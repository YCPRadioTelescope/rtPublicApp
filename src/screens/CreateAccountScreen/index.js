import {Text, View, TouchableHighlight, TextInput, Dimensions, ImageBackground, StyleSheet, Image} from 'react-native';
import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import {login} from './AuthActions';
import { AsyncStorage } from "react-native";
import styles from './styles';
import Galaxy from '../../components/galaxy/Galaxy.js';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

class CreateAccountScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.auth.firstName || "",
      lastName: this.props.auth.lastName || "",
      type: this.props.auth.type || "",
      companyAffiliation: this.props.auth.companyAffiliation || "",
      emailAddress: this.props.auth.emailAddress || "",
      confirmEmailAddress: this.props.auth.confirmEmailAddress || "",
      password: this.props.auth.password || "",
      confirmPassword: this.props.auth.confirmPassword || "",
      showPassword: true,
      icEye: "eye-off-outline"
    };
  }


  login = async () => {
    await this.props.login(this.state.emailAddress, this.state.password).then(response => {
      console.log('response', response);
      if(response.type === "LOGIN_SUCCESS"){
        this.props.navigation.navigate("Home");
      }
      else{
        alert("Looks like the stars did not align correctly!  Please try to login again.")
      }
    })
  };

  autoSubmit= ( ) => {
      this.props.navigation.navigate("Home");
  }

  render() {
    return (
        <View>
        <Galaxy style={{ width:'100%', height: '100%'}} />
        <View style={styles.navbar}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate("Login")} style={styles.back}>
            <Image
                source={require("../../assets/images/backWhite.png")}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}> New Account </Text>
          <TextInput
            placeholder="First Name"
            autoCapitalize="none"
            placeholderTextColor="white"
            value={this.state.firstName}
            onChangeText={firstName => this.setState({ firstName })}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Last Name"
            autoCapitalize="none"
            placeholderTextColor="white"
            value={this.state.lastName}
            onChangeText={lastName => this.setState({ lastName })}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Company Affiliation (Optional)"
            autoCapitalize="none"
            placeholderTextColor="white"
            value={this.state.companyAffiliation}
            onChangeText={companyAffiliation => this.setState({ companyAffiliation })}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Email Address"
            autoCapitalize="none"
            placeholderTextColor="white"
            value={this.state.emailAddress}
            onChangeText={emailAddress => this.setState({ emailAddress })}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Re-Type Email Address"
            autoCapitalize="none"
            placeholderTextColor="white"
            value={this.state.confirmEmailAddress}
            onChangeText={confirmEmailAddress => this.setState({ confirmEmailAddress })}
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
          <TextInput
            placeholder="Re-Type Password"
            secureTextEntry={this.state.showPassword}
            autoCapitalize="none"
            placeholderTextColor="white"
            value={this.state.confirmPassword}
            onChangeText={confirmPassword => this.setState({ confirmPassword })}
            style={styles.textInput}
          />

          <TouchableHighlight onPress={this.autoSubmit} style={styles.button}>
            <View>
              <Text style={styles.buttonText}> Submit </Text>
            </View>
          </TouchableHighlight>

        </View>
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
)(CreateAccountScreen);
