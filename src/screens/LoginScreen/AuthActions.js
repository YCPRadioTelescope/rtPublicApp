import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';


const url = "https://prod-api.ycpradiotelescope.com";
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};

export const loginFailure = error => {
  return {
    type: LOGIN_FAILURE,
    error
  };
};

saveJWT = async (jwt) => {
  try {
    await AsyncStorage.setItem('jwt', jwt);
  } catch (e) {
    console.log("Error while saving JWT: ", e);
  }
}

export const login = (email, password) => {
  return dispatch => {
      // Set default header content to application/json
      axios.defaults.headers.common["Content-Type"] = "application/json";

      // Must post the credentials to this endpoint in order to get the JWT in the response
      try {
        return axios
        .post(`${url}/login?email=${email}&password=${password}`)
        .then(response => {
          // Call function that saves down the JWT
          saveJWT(response.headers.authorization);
          this.getUserData(response.headers.authorization);
          return dispatch(loginSuccess(response));
        })
        .catch(error => {
          console.log("ERROR LOGGING IN: ", error);
          return dispatch(loginFailure(error.message));
        });
      } catch(e) {
          console.log("Error with credentials: ", e);
      }
  };
};

saveItem = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log("Error while saving Item: ", key,", ERROR MESSAGE: ", e);
    }
  }

getUserData = async (jwt) => {
    // Make get request to return the user's information that is saved down using AsyncStorage
    try {
        // Set default header content to application/json
        axios.defaults.headers.common["Content-Type"] = "application/json";

        // Set default header authorization to the token passed in parameter
        axios.defaults.headers.common["Authorization"] = jwt;
        axios
        .get(`${url}/api/auth`)
        .then(response => {
          this.saveItem('userid', JSON.stringify(response.data.data.userId));
          this.saveItem('email', JSON.stringify(response.data.data.email));
          this.saveItem('firstname', JSON.stringify(response.data.data.firstName));
          this.saveItem('lastname', JSON.stringify(response.data.data.lastName));
        })
        .catch(error => {
          console.log("ERROR WITH GET REQUEST: ", error);
        });
    } catch (e) {
      console.log("Error with getting user data: ", e);
    }
};
