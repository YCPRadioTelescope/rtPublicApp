import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';


const url = "https://prod-api.ycpradiotelescope.com/";
export const PUBLIC = "PUBLIC";
export const PUBLIC_SUCCESS = "PUBLIC_SUCCESS";
export const PUBLIC_FAILURE = "PUBLIC_FAILURE";

export const publicSuccess = pub => {
    return {
        type: PUBLIC_SUCCESS,
        pub
    };
};

export const publicFailure = error => {
    return {
        type: PUBLIC_FAILURE,
        error
    };
};

export const publicAppts = (userId) => {
    this.set;
    let reqBody = {
        "userId": userId,
        "page": 0 ,
        "size": 0
    };
    return dispatch => {
        //console.log("name is: "+name +" comments is: "+comments);
        return axios
            .post(`${url}/api/users/${userId}/appointments/completedList`,reqBody)
            .then(response => {
                console.log(JSON.stringify(response));
                return dispatch(publicSuccess(response.data));
            })
            .catch(error => {
                console.log(error.response.data.message);
                return dispatch(publicFailure(error.response.data));
            });
    };
};


