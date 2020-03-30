import React, {Component} from 'react';
import { Provider } from "react-redux";
import AppContainer from './MainNavigation';
import store from "./store";

console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
