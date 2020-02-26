import { axios } from "axios";
import { AsyncStorage } from '@react-native-community/async-storage';

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
    this.set;
    let dataStr = {
      'firstName': firstName,
      'lastName': lastName,
      'email': email,
      'emailConfirm': emailConfirm,
      'phoneNumber': phoneNumber,
      'password': password,
      'passwordConfirm': passwordConfirm,
      'company': company,
      'categoryOfService': categoryOfService
    };
    let head = {
      'Content-Type': 'application/json'
    };
  return dispatch => {
    return axios.post('https://prod-api.ycpradiotelescope.com/api/users', dataStr, head)
      .then(response => {
        console.log(JSON.stringify(response));
        return dispatch(signupSuccess(response.data));
      })
      .catch(error => {
        console.log(error.response.data.message);
        return dispatch(signupFailure(error.response.data));
      });
  };
};
