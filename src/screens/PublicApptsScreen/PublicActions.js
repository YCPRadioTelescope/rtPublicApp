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
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqY29uc3RhbnRpbmVAeWNwLmVkdSIsImV4cCI6MTU4NTc1OTg0OX0.FiYqtZsk2QrWPWbDn6fAK66rTQe0RE3Vds22Z-Ex5smps2Vtu5HuIn8Xiu_7JxElNfsOTttldryoNe7RzpQLZg',
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


