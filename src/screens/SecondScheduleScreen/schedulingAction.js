import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';


const url = "http://api.ycpradiotelescope.com:8080";
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
    let data = {
      "userId": userId,
      "startTime": startTime,
      "endTime": endTime,
      "telescopeId": telescopeId,
      "isPublic": isPublic,
      "priority": 'PRIMARY',
      "hours": JSON.parse(hours),
      "minutes": JSON.parse(minutes),
      "seconds": JSON.parse(seconds),
      "declination": JSON.parse(declination)
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
