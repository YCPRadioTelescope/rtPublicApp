import {Image, Text, TextInput, TouchableHighlight, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {bindActionCreators} from 'redux';
import {feedback} from "./FeedbackActions";
import {connect} from "react-redux";
import AsyncStorage from '@react-native-community/async-storage';

class FeedbackScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            feedbackText: null,
            name: "publicapptestname"
        };
    }
    sendFeedback = async () =>{
        await this.props.feedback(this.state.name, this.state.feedbackText).then(response => {
            /*
            check if feedback is valid.
            Database checks if null and if feedbackText is greater then 100 chars
            but it wouldnt hurt to check here as well
            */
            if(!this.state.feedbackText){
                alert("Error. Feedback cannot be null" )
            }
            else if(this.state.feedbackText.length>100){
                alert("Error. Feedback must be 100 characters or less" )
            }
            else{
                console.log('response'+ response);
                if(response.type === "FEEDBACK_SUCCESS"){
                    alert("Feedback Sent Successfully" )
                }
                else{
                    alert("Error: Could Not Send Feedback. Error Code: "+ response.feed.statusCode+ " Reason: "+response.feed.statusReason)
                }
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
