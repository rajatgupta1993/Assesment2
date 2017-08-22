import React from 'react';
import PropTypes from 'prop-types';
const LoaderComponent = (props) => {
    return (

        <div className={props.isLoading ? `loader` : `loader-disabled`}>
            <img src="http://localhost:3000/loader.gif" />
        </div>
    );
};

LoaderComponent.PropTypes={
    isLoading: PropTypes.bool

}
export default LoaderComponent;