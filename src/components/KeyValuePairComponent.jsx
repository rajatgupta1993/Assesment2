import React from 'react';
import PropTypes from 'prop-types';

const KeyValuePairComponent = ({key1,editable,onChange,value}=props) => {

    return (
        <div className="marginBottom">
            <div className="keyValueContainer">
                <div className="key"> {key1}</div>
                {(editable) ? (<textarea type="text" className="value textArea" onChange={onChange}
                    value={value} />) :
                    (<div className="value"> {value}</div>)}
            </div>
        </div>
    );
};

KeyValuePairComponent.propTypes = {
    key1: PropTypes.string,
    onChange: PropTypes.func,
    editable: PropTypes.bool
};


export default KeyValuePairComponent;