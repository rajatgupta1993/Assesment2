import React from 'react';
import Tile from "./tiles";
import { Link } from 'react-router-dom';
import KeyValuePairComponent from './KeyValuePairComponent';
import Modal from './Modal';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class DetailsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            data: '',
            isModalOpen: false,
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onCompanyChange = this.onCompanyChange.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onAgeChange = this.onAgeChange.bind(this);
        this.onSaveClicked = this.onSaveClicked.bind(this);
     

    }

    componentWillMount() {
        this.props.getDetails(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps, nextState) {
        if (this.props !== nextProps) {
            this.setState({
                data: nextProps.detailData,
                title: nextProps.detailData.title,
                description: nextProps.detailData.details.description,
                director: nextProps.detailData.details.director,
                age: nextProps.detailData.details.age,
            });
        }
    }

    onSaveClicked() {
        this.postDataToServer();
        this.setState({ isModalOpen: false });
    }

    postDataToServer() {
        let reqParams = {
            id: this.state.data.id,
            url: this.state.data.url,
            title: this.state.title,
            details: {
                description: this.state.description,
                age: this.state.age,
                director: this.state.director,
            },
        };

        let reqObj = {
            method: "POST",
            body: JSON.stringify(reqParams),
        };

        this.props.postDataToServerAction(reqObj);
    }


    openModal() {
        this.setState({ isModalOpen: true });
    }

    closeModal() {
        this.setState({ isModalOpen: false });
    }

    onNameChange(e) {
        this.setState({
            description: e.target.value,
        });
    }

    onCompanyChange(e) {
        this.setState({
            director: e.target.value,
        });
    }

    onAgeChange(e) {
        this.setState({
            age: e.target.value,
        });
    }

    onTitleChange(e) {
        this.setState({
            title: e.target.value,
        });
    }
    render() {

        return (

            (!(_.isEmpty(this.state.data))) && (this.state != null) && (<div className="left">
                <div className="center">
                    <img src={this.state.data.url}
                        style={{ width: '500px', height: '400px' }} alt="tile" />
                    <hr />
                    <KeyValuePairComponent key1={"Id :"} value={this.state.data.id} editable={false} />

                    <KeyValuePairComponent key1={"Title :"} value={this.state.title} editable={false} />

                    <KeyValuePairComponent key1={"Description :"} value={this.state.description} editable={false} />

                    <KeyValuePairComponent key1={"Director :"} value={this.state.director} editable={false} />

                    <KeyValuePairComponent key1={"Year of Release :"} value={this.state.age} editable={false} />

                    <button className="btn btn btn-primary" type="button" onClick={this.openModal}>Edit</button>
                </div>

                {(this.state.isModalOpen) ? (<Modal state={this.state} closeModal={this.closeModal} onTitleChange={this.onTitleChange}
                    onNameChange={this.onNameChange} onCompanyChange={this.onCompanyChange}
                    onAgeChange={this.onAgeChange} onSaveClicked={this.onSaveClicked} />) : null}
            </div>)
        );
    }
}


DetailsPage.propTypes = {
    postDataToServerAction: PropTypes.func,
    getDetails : PropTypes.func,
    detailData :PropTypes.object,
};
