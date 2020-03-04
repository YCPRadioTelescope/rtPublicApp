import AsyncStorage from '@react-native-community/async-storage';

import { combineReducers } from "redux";

import {
    FEEDBACK,
    FEEDBACK_SUCCESS,
    FEEDBACK_FAILURE,
} from "./FeedbackActions";

const INITIAL_STATE = {
    statusCode: null,
    statusReason: null,
    data: null,
    loading: false,
    error: false,
    errorMessage: null,
};
const feedbackReducer = (state = INITIAL_STATE, action) => {
    console.log("ACTION feedback", action);
    switch (action.type) {
        // Don't think this gets called
        case FEEDBACK:
            return {
                ...state,
                loading: true
                //loader: true
            };
        // return response
        case FEEDBACK_SUCCESS:

            return {
                ...state,
                loading: false,
                isLoading: false,
                errorResponse: false,
                ...action.feed
            };
        // Extract error message to display
        case FEEDBACK_FAILURE:
            return {
                ...state,
                loading: false,
                isLoading: false,
                errorResponse: true,
                errorMessage: action.error
            };
        // Don't think this gets called
        default:
            return state;
    }
};

export default combineReducers({
    feedback: feedbackReducer
});
