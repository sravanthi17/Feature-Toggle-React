import React from 'react';
import ReactDOM from 'react-dom';
import {FeatureFlag, setFlags} from 'react-redux-feature-flag';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './App';
import './index.css';

const client = require("cloud-config-client");


//
// var request = require('sync-request');
// var res = request('GET', 'http://localhost:8888/sample-config/development');

const enhancer =
    FeatureFlag.instrument({
        EnableComponent: false
    });

// const isFeatureEnabled= JSON.parse(res.getBody('utf8')).propertySources[0].source.EnableComponent == "true";
const reducer = state => state;
const initialState = [() => ({}), 'plain JS state'];

const store = createStore(reducer,initialState,enhancer);

client.load({
    name:"sample-config",
    profiles:["development"]
}).then((config) => {
    store.dispatch(setFlags({  EnableComponent: config.get("EnableComponent") == "true"}));
    console.log(store.getState());
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
});


