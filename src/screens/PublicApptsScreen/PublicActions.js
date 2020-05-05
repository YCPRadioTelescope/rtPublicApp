import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';

const url = "http://api.ycpradiotelescope.com:8080";
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
        axios.defaults.headers.common["Content-Type"] = "application/json";
        AsyncStorage.getItem('jwt').then((value) => {
            axios.defaults.headers.common["Authorization"] = value;
        }).done();
        return axios
            .get(`${url}/api/appointments/publicCompleted?page=${page}&size=${size}`,options)
            .then(response => {
                return dispatch(publicSuccess(response.data));
            })
            .catch(error => {
                console.log(error.response.data.message);
                return dispatch(publicFailure(error.response.data));
            });
    };
};
