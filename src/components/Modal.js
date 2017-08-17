import React from 'react';
import reactLogo from '../resources/reactLogo.png';
import '../css/styles.css';
import KeyValuePairComponent from './KeyValuePairComponent';
import PropTypes from 'prop-types';

export default class Modal extends React.Component {

    render() {

        return (
            <div className="backdropStyle">
                <span className="glyphicon glyphicon-remove floatRight" onClick={this.props.closeModal} />
                <div className="marginBottom marginTop">
                    <div>
                        <div className="key"> id: </div>
                        <div className="value"> {this.props.state.data.id} </div>
                    </div>
                </div>

                <KeyValuePairComponent key1={"Title :"} value={this.props.state.title} editable onChange={this.props.onTitleChange} />
                <KeyValuePairComponent key1={"Description :"} value={this.props.state.description} editable onChange={this.props.onNameChange} />
                <KeyValuePairComponent key1={"Director :"} value={this.props.state.director} editable onChange={this.props.onCompanyChange} />
                <KeyValuePairComponent key1={"Year of Release :"} value={this.props.state.age} editable onChange={this.props.onAgeChange} />

                <button className="btn btn btn-primary" type="button" onClick={this.props.onSaveClicked}>save</button>
                <button className="btn btn btn-danger marginLeft" type="button" onClick={this.props.closeModal}>cancel</button>
            </div>
        );
    }
}

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

