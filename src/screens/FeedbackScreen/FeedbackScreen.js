import {Image, Text, TextInput, TouchableHighlight, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {bindActionCreators} from 'redux';
import {feedback} from "./FeedbackActions";
import {connect} from "react-redux";

class FeedbackScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            feedbackText: null,
        };
    }
    sendFeedback = async () =>{
        await this.props.feedback("test", "test").then(response => {
            console.log('response', response);
            if(response.type === "FEEDBACK_SUCCESS"){
                alert("Feedback Sent Successfully")
            }
            else{
                alert("Looks like the stars did not align correctly!  Please try to send your feedback again.")
            }
        })

    }
    render() {
        console.log('Feedback', this.props.auth);
        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <Text style={styles.title}>Feedback</Text>
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
const mapStateToProps = state => {
    return {

        /*errorResponse: email.errorResponse,
        errorMessage: email.errorMessage,
        errorResponse: approveUser.errorResponse,
        errorMessage: approveUser.errorMessage,*/
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            feedback,
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FeedbackScreen);
