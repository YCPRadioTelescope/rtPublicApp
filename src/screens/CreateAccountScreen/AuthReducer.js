import AsyncStorage from '@react-native-community/async-storage';

import { combineReducers } from "redux";

import {
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from "./AuthActions";

const INITIAL_STATE = {
  errorMessage: null,
  signupError: false,
  loadingNewUser: true,
  errorResponse: false
};

const signupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Don't think this gets called
    case SIGNUP:
      return {
        ...state,
        signupError: false,
        loadingNewUser: true,
        errorResponse: false,
      };
    // Take all returned user info and put it in store
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signupError: false,
        loadingNewUser: false,
        errorResponse: false,
        ...action.user
      };
    // Extract error message to display
    case SIGNUP_FAILURE:
      return {
        ...state,
        signupError: true,
        loadingNewUser: false,
        errorResponse: true,
        errorMessage: action.error
      };
    // Don't think this gets called
    default:
      return state;
  }
};

export default combineReducers({
  auth: signupReducer
});
