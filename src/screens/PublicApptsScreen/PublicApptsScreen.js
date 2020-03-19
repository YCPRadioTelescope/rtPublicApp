import {Image, ScrollView, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import styles from './styles';
import ScrollElements from "../../components/scrollview/ScrollView";
import {PUBLIC_SUCCESS, publicAppts} from "./PublicActions";
import {bindActionCreators} from "redux";
import {feedback} from "../FeedbackScreen/FeedbackActions";
import {connect} from "react-redux";

class PublicScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          showAppointments: 0,
          content: [],
          userId: 2,
          page: 0,
          size: 10,

      };
  }
    async getData(){

        await this.props.publicAppts(this.state.userId,this.state.page,this.state.size).then(response => {
            //this.setState({isLoading: false});'
            let statusCode = response.publicAppointments.statusCode;
            console.log("Getting the User's public appointments response: "+ statusCode)

            if(response.type == PUBLIC_SUCCESS){
                this.setState({content: response.publicAppointments.data.content})
            }
            else{
                alert("Error: Could Not Get Public Appointments. Error Code: "+ response.feed.statusCode+ " Reason: "+response.feed.statusReason)
            }
            //console.log("Appointment content: "+this.state.content)

        })
    }
    componentDidMount() {
        this.focusListener = this.props.navigation.addListener("didFocus", () => {
            console.log('Public Appointments: Listener activated');
            this.getData();
        });


    }
  showAppoints = () =>{
      this.setState({showAppointments: 1})
  };
  render() {
    console.log('Public Appointment content', this.state.content);
    if(!this.state.showAppointments){
        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <Text style={styles.title}>Public Appointments Screen</Text>
                    <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
                        <Image
                            source={require("../../assets/images/backWhite.png")}
                        />
                    </TouchableHighlight>
                </View>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Schedule')} style={styles.back}>
                    <View style = {styles.item}>
                        <Text style = {styles.name}>No Public Appointments </Text>
                        <Text style = {styles.type}>There are no completed public observations </Text>
                        <Text style = {styles.type}>Tap here to add an appointment </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.showAppoints} style={styles.button}>
                    <View>
                        <Text style={styles.buttonText}> TEMP show appts </Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
    else{
        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <Text style={styles.title}>Public Appointments Screen</Text>
                    <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
                        <Image
                            source={require("../../assets/images/backWhite.png")}
                        />
                    </TouchableHighlight>
                </View>

                <View style={styles.scroll}>
                    <ScrollView style = {styles.element}>
                        {
                            this.state.content.map((item, index) => (
                                <View key = {item.id} style = {styles.item}>
                                    <View style = {styles.text}>
                                        <Text style = {styles.name}>{item.userFirstName}'s Appointment</Text>
                                        <Text style = {styles.type}>Type: {item.type} Status: {item.status}</Text>
                                        <Text style = {styles.RightAscension}> Start Time: {item.startTime} </Text>
                                        <Text style = {styles.Declination}> End Time: {item.endTime}</Text>
                                        <Text style = {styles.RightAscension}> RightAscension: {item.rightAscension}</Text>
                                        <Text style = {styles.Declination}> Declination: {item.declination}</Text>
                                    </View>
                                </View>
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        );
    }

  }
}

const mapStateToProps = state => {
   // const { appoints } = state;
    //console.log("Getting public appoints = state in MapStateToProps",appoints);
    return {

        /*
        errorResponse: appoints.errorResponse,
        errorMessage: appoints.errorMessage,
        */
        //appointments: appoints.publicAppointments
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            publicAppts,
        },
        dispatch
    );


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PublicScreen);
