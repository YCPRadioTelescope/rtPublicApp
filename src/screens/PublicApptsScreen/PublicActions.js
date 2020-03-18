import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';


const url = "https://prod-api.ycpradiotelescope.com/";
export const PUBLIC = "PUBLIC";
export const PUBLIC_SUCCESS = "PUBLIC_SUCCESS";
export const PUBLIC_FAILURE = "PUBLIC_FAILURE";

export const publicSuccess = publicAppointments => {
    return {
        type: PUBLIC_SUCCESS,
        publicAppointments
    };
};

export const publicFailure = error => {
    return {
        type: PUBLIC_FAILURE,
        error
    };
};

export const publicAppts = (userId, page, size) => {
    this.set;
    let options = {
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqY29uc3RhbnRpbmVAeWNwLmVkdSIsImV4cCI6MTU4NDcyMjE3OX0.mI_ws-NoW9rYgSfLzQuYJC1D98V-Y1cn0nq2N3IzOin2QbNGjMlXmjyB47Ks254XNIGN3LA32AWbVZBFysZrdg'
        },
    };
    return dispatch => {
        //console.log("name is: "+name +" comments is: "+comments);
        /*
        Check front end API call. Header contains tocken. Gotta figure out how to put the tocken in there. 
        remember to set page and size to actual parameters
         */
        return axios
            .get(`${url}/api/users/${userId}/appointments/completedList?page=${page}&size=${size}`,options)
            .then(response => {
                //console.log(JSON.stringify(response));
                return dispatch(publicSuccess(response.data));
            })
            .catch(error => {
                console.log(error.response.data.message);
                return dispatch(publicFailure(error.response.data));
            });
    };
};


