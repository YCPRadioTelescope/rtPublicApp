import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';


const url = "https://prod-api.ycpradiotelescope.com";
export const APPOINTMENT = "APPOINTMENT";
export const APPOINTMENT_SUCCESS = "APPOINTMENT_SUCCESS";
export const APPOINTMENT_FAILURE = "APPOINTMENT_FAILURE";

export const appointmentSuccess = scheduledAppointment => {
    return {
        type: APPOINTMENT_SUCCESS,
        scheduledAppointment
    };
};

export const appointmentFailure = error => {
    return {
        type: APPOINTMENT_FAILURE,
        error
    };
};

export const schedulePointAppointment = (userId, startTime, endTime, telescopeId, isPublic, hours, minutes, seconds, declination) => {
    axios.defaults.headers.common["Content-Type"] = "application/json";
    AsyncStorage.getItem('jwt').then((value) => {
        axios.defaults.headers.common["Authorization"] = value;
    });

    console.log("DATA PRINTING: userid = ",userId," startTime = ",JSON.stringify(startTime)," endTime = ",JSON.stringify(endTime)," telescopeId = ",telescopeId," isPublic = ",isPublic," hours = ",hours," minutes = ",minutes," seconds = ",seconds, " END OF DATA CHECK ");

    let data = {
      "userId": userId,
      "startTime": startTime,
      "endTime": endTime,
      "telescopeId": telescopeId,
      "isPublic": isPublic,
      "priority": 'PRIMARY',
      "hours": hours,
      "minutes": minutes,
      "seconds": seconds,
      "declination": declination
    };
    return dispatch => {
        return axios
            .post(`${url}/api/appointments/schedule/coordinate`, data)
            .then(response => {
                console.log("SUCCESSFULLY REQUESTED RESPONSE: ", JSON.stringify(response));
                return dispatch(appointmentSuccess(response.data));
            })
            .catch(error => {
                console.log("ERROR WITH REQUESTED APPOINTMENT", JSON.stringify(error.response));
                return dispatch(appointmentFailure(error.response.data));
            });
    };
};