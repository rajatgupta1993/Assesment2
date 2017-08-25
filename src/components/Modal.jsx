import React from 'react';
import KeyValuePairComponent from './KeyValuePairComponent';
import PropTypes from 'prop-types';


const Modal = ({closeModal, state, data, id, title, description, director, age, onTitleChange,
                onNameChange, onCompanyChange, onAgeChange, onSaveClicked}) => {
        return (
            <div className="backdropStyle">
                <span className="glyphicon glyphicon-remove floatRight" onClick={closeModal} />
                <div className="marginBottom marginTop">
                    <div>
                        <div className="key"> id: </div>
                        <div className="value"> {state.data.id} </div>
                    </div>
                </div>

                <KeyValuePairComponent key1={"Title :"} value={state.title} editable onChange={onTitleChange} />
                <KeyValuePairComponent key1={"Description :"} value={state.description} editable onChange={onNameChange} />
                <KeyValuePairComponent key1={"Director :"} value={state.director} editable onChange={onCompanyChange} />
                <KeyValuePairComponent key1={"Year of Release :"} value={state.age} editable onChange={onAgeChange} />

                <button className="btn btn btn-primary" type="button" onClick={onSaveClicked}>save</button>
                <button className="btn btn btn-danger marginLeft" type="button" onClick={closeModal}>cancel</button>
            </div>
        );
};

Modal.propTypes = {
    closeModal: PropTypes.func,
    state: PropTypes.object,
    data: PropTypes.object,
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    director: PropTypes.string,
    age: PropTypes.string,
    onTitleChange: PropTypes.func,
    onNameChange: PropTypes.func,
    onCompanyChange: PropTypes.func,
    onAgeChange: PropTypes.func,
    onSaveClicked: PropTypes.func,
};

export default Modal;
