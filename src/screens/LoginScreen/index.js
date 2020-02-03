import {Text, View, TouchableHighlight, TextInput, Dimensions, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import {login} from './AuthActions';
import { AsyncStorage } from "react-native";
import styles from './styles';
import Galaxy from '../../components/galaxy/Galaxy.js';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

class DetailsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      emailAddress: this.props.auth.emailAddress || "",
      password: this.props.auth.password || "",
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

  autoHome= ( ) =>  {
    this.props.navigation.navigate("Home");
  }

  render() {
    return (
        <View>
          <Galaxy style={{ width:'100%', height: '100%'}} />


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
          <TouchableHighlight onPress={this.login} style={styles.button}>
            <View>
              <Text style={styles.buttonText}> LOGIN </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={this.autoHome} style={styles.button}>
            <View>
              <Text style={styles.buttonText}> TEMP Home Button </Text>
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
)(DetailsScreen);
