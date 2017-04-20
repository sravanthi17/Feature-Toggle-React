import React from 'react';
import ReactDOM from 'react-dom';
import {FeatureFlag, setFlags} from 'react-redux-feature-flag';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './App';
import './index.css';
const enhancer =
    FeatureFlag.instrument({
        EnableComponent: false
    });

const reducer = state => state;
const initialState = [() => ({}), 'plain JS state'];

const store = createStore(reducer,initialState,enhancer);
// store.dispatch(setFlags({  EnableComponent: false}));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
