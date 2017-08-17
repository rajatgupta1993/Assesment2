import React from 'react';
import Tile from './tiles';
import '../css/styles.css';
import { Link, } from 'react-router-dom';
import KeyValuePairComponent from './KeyValuePairComponent';
import Modal from './Modal';
import PropTypes from 'prop-types';

export default class DetailsPage extends React.Component {

    render() {

        return (

            (this.props.data != null) && (<div className="left">
                <div className="center">
                    <img src={this.props.url}
                        style={{ width: '500px', height: '400px' }} alt="tile" />
                    <hr />
                    <KeyValuePairComponent key1={"Id :"} value={this.props.id} editable={false} />

                    <KeyValuePairComponent key1={"Title :"} value={this.props.title} editable={false} />

                    <KeyValuePairComponent key1={"Description :"} value={this.props.description} editable={false} />

                    <KeyValuePairComponent key1={"Director :"} value={this.props.director} editable={false} />

                    <KeyValuePairComponent key1={"Year of Release :"} value={this.props.age} editable={false} />

                    <button className="btn btn btn-primary" type="button" onClick={this.props.openModal}>Edit</button>
                </div>

                {(this.props.isModalOpen) ? (<Modal state={this.props.state} closeModal={this.props.closeModal} onTitleChange={this.props.onTitleChange}
                                                    onNameChange={this.props.onNameChange} onCompanyChange={this.props.onCompanyChange}
                                                    onAgeChange={this.props.onAgeChange} onSaveClicked={this.props.onSaveClicked} />) : null}
            </div>)
        );
    }
}


DetailsPage.propTypes = {
    match: PropTypes.object,
    params: PropTypes.object,
    id: PropTypes.number
};
