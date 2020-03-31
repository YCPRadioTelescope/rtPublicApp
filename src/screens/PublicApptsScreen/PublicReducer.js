import AsyncStorage from '@react-native-community/async-storage';

import { combineReducers } from "redux";

import {
    PUBLIC,
    PUBLIC_SUCCESS,
    PUBLIC_FAILURE,
} from "./PublicActions";

const INITIAL_STATE = {
    statusCode: null,
    statusReason: null,
    content: null,
    loading: false,
    error: false,
    errorMessage: null,

};
const publicReducer = (state = INITIAL_STATE, action) => {
    console.log("ACTION Public Appointments", action);
    switch (action.type) {
        // Don't think this gets called
        case PUBLIC:
            return {
                ...state,
                loading: true
                //loader: true
            };
        // return response
        case PUBLIC_SUCCESS:

            return {
                ...state,
                loading: false,
                isLoading: false,
                errorResponse: false,
                ...action.feed
            };
        // Extract error message to display
        case PUBLIC_FAILURE:
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
    publicAppts: publicReducer
});
