import React from 'react';
import PropTypes from 'prop-types';
const LoaderComponent = ({isLoading}=props) => {
    return (

        <div className={isLoading ? `loader` : `loader-disabled`}>
            <img src="http://localhost:3000/loader-1.gif" />
        </div>
    );
};

LoaderComponent.PropTypes={
    isLoading: PropTypes.bool

}
export default LoaderComponent;