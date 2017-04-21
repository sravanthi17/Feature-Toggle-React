import React from 'react';
import App from '../src/App';
import { mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect }from 'chai';
import {FeatureFlag, setFlags} from 'react-redux-feature-flag';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

chai.use(chaiEnzyme());
const enhancer =
    FeatureFlag.instrument({
        EnableComponent: true
    });
const reducer = state => state;
const initialState = [() => ({}), 'plain JS state'];
const store = createStore(reducer,initialState,enhancer);

it('renders enable component', () => {


    const instance = mount(
        <Provider store={store}>
          <App/>
        </Provider>
    );
    expect(instance.find('EnableComponent').length).to.equal(1);
    expect(instance.find('DisableComponent').length).to.equal(0);
});

it('renders disable component', () => {
    store.dispatch(setFlags({  EnableComponent:false }));
    const instance = mount(
        <Provider store={store}>
            <App/>
        </Provider>
    );
    expect(instance.find('DisableComponent').length).to.equal(1);
    expect(instance.find('EnableComponent').length).to.equal(0);
});