import React, { Component, PropTypes } from 'react';
import ToggleWrapper from './ToggleWrapper.js'
import EnableComponent from './EnableComponent.js';
import DisableComponent from './DisableComponent.js';


class AnotherComponent extends Component {
    render() {
        const Comp = ToggleWrapper("EnableComponent", EnableComponent, DisableComponent);
        return <Comp/>;
    }
}

export default AnotherComponent;
