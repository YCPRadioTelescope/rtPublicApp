import {Image, Text, TextInput, TouchableHighlight, View} from 'react-native';
import React from 'react';
import styles from './styles';

class FeedbackScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            feedbackText: null,
        };
    }
    sendFeedback(){
        alert("Sorry! This feature is not implemented yet")
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Feedback</Text>
                <View style={styles.navbar}>
                    <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
                        <Image
                            source={require("../../assets/images/backWhite.png")}
                        />
                    </TouchableHighlight>
                </View>
                <TextInput
                    placeholder="Enter Your Feedback Here"
                    //secureTextEntry={this.state.showPassword}
                    autoCapitalize="none"
                    placeholderTextColor="white"
                    value={this.state.feedbackText}
                    onChangeText={feedbackText => this.setState({ feedbackText })}
                    style={styles.textInput}
                    multiline = {true}

                />
                <TouchableHighlight onPress={this.sendFeedback} style={styles.button}>
                    <View>
                        <Text style={styles.buttonText}> Send </Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

export default FeedbackScreen ;
