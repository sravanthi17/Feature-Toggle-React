import React, { Component } from 'react';
import './App.css';
import {FeatureFlag} from 'react-redux-feature-flag';
import EnableComponent from './EnableComponent.js';
import DisableComponent from './DisableComponent.js';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
          <FeatureFlag
              name="EnableComponent"
              render={() => <EnableComponent/>}
              fallbackRender={() => <DisableComponent />}
          />
      </div>
    );
  }
}

export default connect()(App);
