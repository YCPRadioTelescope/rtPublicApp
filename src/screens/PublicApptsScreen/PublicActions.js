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
        },
    };
    return dispatch => {
        //console.log("name is: "+name +" comments is: "+comments);
        /*
        Check front end API call. Header contains tocken. Gotta figure out how to put the tocken in there. 
        remember to set page and size to actual parameters
        For some reason setting the content type using the below snippet doesnt work. it needs to be in the options object
         */
        //axios.defaults.headers.common["Content-Type"] = "application/json";
        AsyncStorage.getItem('jwt').then((value) => {
            axios.defaults.headers.common["Authorization"] = value;
        }).done();
        return axios
            .get(`${url}/api/appointments/publicCompleted?page=${page}&size=${size}`,options)
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


