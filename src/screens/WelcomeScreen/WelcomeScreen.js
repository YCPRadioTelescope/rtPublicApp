import {Image, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Galaxy from '../../components/galaxy/Galaxy.js';

class WelcomeScreen extends React.Component {

  autoHome= ( ) =>  {
      this.props.navigation.navigate("Home");
  }
  gotoLogin = () => {
      this.props.navigation.navigate("Login");
  }
  gotoCredits = () => {
      //this.props.navigation.navigate();
  }

  shouldComponentUpdate(nextProps, nextState){
      return !equals(nextProps, this.props); // equals() is your implementation
  }

  render() {
    return (
      <View>
      <Galaxy style={{ width:'100%', height: '100%'}} />
      <View style={styles.container}>
        <Text style = {styles.title}>Welcome!</Text>

          <TouchableHighlight onPress={this.gotoLogin} style={styles.button}>
              <View>
                  <Text style={styles.buttonText}> LOGIN </Text>
              </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.autoHome} style={styles.button}>
              <View>
                  <Text style={styles.buttonText}> TEMP Home Button </Text>
              </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.gotoCredits} style={styles.button}>
              <View>
                  <Text style={styles.buttonText}> Credits </Text>
              </View>
          </TouchableHighlight>
      </View>
      </View>
    );
  }
}

export default WelcomeScreen;
