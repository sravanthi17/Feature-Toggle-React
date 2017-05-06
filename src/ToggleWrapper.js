import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const ToggleWrapper = (featureName, EnableComp, DisabledCompo ) => {
   class ToggleWrapper extends React.Component {
    render(){
        if(!this.props.localstate.__SUPER_SECRET_FEATURE_FLAGS__.flags[featureName]){
          return <EnableComp/>
      }
      return <DisabledCompo/>;
    }
   }
    ToggleWrapper.propTypes = {
        localstate: PropTypes.any
    };
    const mapStateToProps = (state) => ({
        localstate: state
    });
    return connect(mapStateToProps)(ToggleWrapper);
};
export default ToggleWrapper;
