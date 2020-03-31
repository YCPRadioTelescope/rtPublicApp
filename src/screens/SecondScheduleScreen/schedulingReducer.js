import AsyncStorage from '@react-native-community/async-storage';
import { combineReducers } from "redux";

import {
    APPOINTMENT,
    APPOINTMENT_SUCCESS,
    APPOINTMENT_FAILURE,
} from "./schedulingAction";

const INITIAL_STATE = {
    statusCode: null,
    statusReason: null,
    content: null,
    loading: false,
    error: false,
    errorMessage: null,
};

const scheduleReducer = (state = INITIAL_STATE, action) => {
    console.log("ACTION schedule appointment", action);
    switch (action.type) {
        // Don't think this gets called
        case APPOINTMENT:
            return {
                ...state,
                loading: true
                //loader: true
            };
        // return response
        case APPOINTMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                isLoading: false,
                errorResponse: false,
                ...action.feed
            };
        // Extract error message to display
        case APPOINTMENT_FAILURE:
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
    schedulePointAppointment: scheduleReducer
});