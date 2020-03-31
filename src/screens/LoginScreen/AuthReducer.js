import AsyncStorage from '@react-native-community/async-storage';

import { combineReducers } from "redux";

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./AuthActions";

const INITIAL_STATE = {
  loading: false,
  errorMessage: null,
  loginError: false,
  errorResponse: false
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Don't think this gets called
    case LOGIN:
      return {
        ...state,
        loading: true
        //loader: true
      };
    // Take all returned user info and put it in store
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loginError: false,
        loadingUser: false,
        errorResponse: false,
        ...action.user
      };
    // Extract error message to display
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        loginError: true,
        errorResponse: true,
        errorMessage: action.error
      };
    // Don't think this gets called
    default:
      return state;
  }
};

export default combineReducers({
  auth: authReducer
});
