import React, {Component} from 'react';
import { Provider } from "react-redux";
import AppContainer from './MainNavigation';
import store from "./store";
//import Amplify from 'aws-amplify';
// import awsconfig from './aws-exports';
// import { withAuthenticator } from 'aws-amplify-react-native';
//
// Amplify.configure(awsconfig);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

//export default withAuthenticator(App, true);
