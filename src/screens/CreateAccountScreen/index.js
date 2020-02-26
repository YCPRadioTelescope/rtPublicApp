import {
Text,
View,
Alert,
TouchableHighlight,
TextInput,
Dimensions,
ImageBackground,
StyleSheet,
Image,
SafeAreaView,
KeyboardAvoidingView,
ScrollView} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import { signup } from './AuthActions';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

class CreateAccountScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.auth.firstName || "",
      lastName: this.props.auth.lastName || "",
      emailAddress: this.props.auth.emailAddress || "",
      emailConfirm: this.props.auth.emailConfirm || "",
      phoneNumber: this.props.auth.phoneNumber || "",
      company: this.props.auth.company || "",
      password: this.props.auth.password || "",
      passwordConfirm: this.props.auth.passwordConfirm || "",
      categoryOfService: "GUEST",
      hidePassword: true,
    };
  }


  signUp = async () => {
    await this.props.signup(this.state.firstName, this.state.lastName, this.state.emailAddress, this.state.emailConfirm, this.state.phoneNumber, this.state.password, this.state.passwordConfirm, this.state.company, this.state.categoryOfService).then(response => {
      console.log('response', response);
      if(response.type === "SIGNUP_SUCCESS"){
        alert("Thank you for signing up with us. Once approved, follow the instructions sent to your email in order to sign in.")
        this.props.navigation.navigate("Login");
      }
      else{
        alert("Looks like the stars did not align correctly!  Please try to login again.")
      }
    })
  };

  render() {
    return (
        <ScrollView style={{backgroundColor:'#012545'}}>
         <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.keyboard}
            scrollEnabled={false}
          >
         <View style={styles.navbar}>
           <TouchableHighlight onPress={() => this.props.navigation.navigate("Login")} style={styles.back}>
             <Image
                 source={require("../../assets/images/backWhite.png")}
             />
           </TouchableHighlight>
          </View>
        <Text style={styles.title}> New Account </Text>
          <View style={{marginTop:'20%'}}>
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
            value={this.state.emailConfirm}
            onChangeText={emailConfirm => this.setState({ emailConfirm })}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={this.state.hidePassword}
            autoCapitalize="none"
            placeholderTextColor="white"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Re-Type Password"
            secureTextEntry={this.state.hidePassword}
            autoCapitalize="none"
            placeholderTextColor="white"
            value={this.state.passwordConfirm}
            onChangeText={passwordConfirm => this.setState({ passwordConfirm })}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Company Affiliation (Optional)"
            autoCapitalize="none"
            placeholderTextColor="white"
            value={this.state.company}
            onChangeText={company => this.setState({ company })}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Phone Number"
            autoCapitalize="none"
            placeholderTextColor="white"
            value={this.state.phoneNumber}
            onChangeText={phoneNumber => this.setState({ phoneNumber })}
            style={styles.textInput}
          />
          </View>
          <TouchableHighlight onPress={this.signUp} style={styles.button}>
            <View>
              <Text style={styles.buttonText}> Submit </Text>
            </View>
          </TouchableHighlight>
        </KeyboardAwareScrollView>
       </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return {
    signup: user.signup,
    errorResponse: user.signup.errorResponse,
    errorMessage: user.signup.errorMessage
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signup,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAccountScreen);
