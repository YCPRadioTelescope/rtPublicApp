import axios from "axios";
import { AsyncStorage } from '@react-native-community/async-storage';

const url = "https://prod-api.ycpradiotelescope.com/api/users";
export const SIGNUP = "SIGNUP";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const signupSuccess = user => {
  return {
    type: SIGNUP_SUCCESS,
    user
  };
};

export const signupFailure = error => {
  return {
    type: SIGNUP_FAILURE,
    error
  };
};

export const signup = (firstName, lastName, email, emailConfirm, phoneNumber, password, passwordConfirm, company, categoryOfService) => {
  return dispatch => {
    return axios.post(`${url}`,
        {
            'firstName': firstName,
            'lastName': lastName,
            'email': email,
            'emailConfirm': emailConfirm,
            'phoneNumber': phoneNumber,
            'password': password,
            'passwordConfirm': passwordConfirm,
            'company': company,
            'categoryOfService': categoryOfService
        },{
            "headers": {
              'Content-Type': 'application/json',
            }
        }).then(response => {
        console.log(JSON.stringify(response));
        return dispatch(signupSuccess(response.data));
      })
      .catch(error => {
        console.log(error.response.data.message);
        return dispatch(signupFailure(error.response.data));
      });
  };
};
