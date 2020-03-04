import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';


const url = "https://prod-api.ycpradiotelescope.com/";
export const FEEDBACK = "FEEDBACK";
export const FEEDBACK_SUCCESS = "FEEDBACK_SUCCESS";
export const FEEDBACK_FAILURE = "FEEDBACK_FAILURE";

export const feedbackSuccess = feed => {
    return {
        type: FEEDBACK_SUCCESS,
        feed
    };
};

export const feedbackFailure = error => {
    return {
        type: FEEDBACK_FAILURE,
        error
    };
};

export const feedback = (name, comments) => {
    this.set;
    let reqBody = {
        "name": "feedbackfrompublicapp",
        "priority": 1 ,
        "comments": "testingfeedbackfrompublicapp"
    };
    return dispatch => {
        return axios
            .post(`${url}/api/feedback`,reqBody)
            .then(response => {
                console.log(JSON.stringify(response));
                return dispatch(feedbackSuccess(response.data));
            })
            .catch(error => {
                console.log(error.response.data.message);
                return dispatch(feedbackFailure(error.response.data));
            });
    };
};


