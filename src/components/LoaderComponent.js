import React from 'react';

const LoaderComponent = (props) => {
    return (

        <div className={props.isLoading ? `loader` : `loader-disabled`}>
            <img src="http://localhost:3000/loader.gif" />
        </div>
    );
};

export default LoaderComponent;