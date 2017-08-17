import React from 'react';
import Tile from '../components/tiles';
import { connect } from 'react-redux';
import '../css/styles.css';
import { Link, } from 'react-router-dom';
import { getDetails, postDataToServerAction } from '../actions/action';
import KeyValuePairComponent from '../components/KeyValuePairComponent';
import DetailsPage from '../components/DetailsPage';
import Modal from '../components/Modal';
import PropTypes from 'prop-types';
import _ from "lodash";

class DetailsPageContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '',
            isModalOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onCompanyChange = this.onCompanyChange.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onAgeChange = this.onAgeChange.bind(this);
        this.onSaveClicked = this.onSaveClicked.bind(this);
        this.postDataToServer = this.postDataToServer.bind(this);

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
                age: nextProps.detailData.details.age
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
                director: this.state.director
            }
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
            description: e.target.value
        });
    }

    onCompanyChange(e) {
        this.setState({
            director: e.target.value
        });
    }

    onAgeChange(e) {
        this.setState({
            age: e.target.value
        });
    }

    onTitleChange(e) {
        this.setState({
            title: e.target.value
        });
    }

    render() {

        return (
            (!(_.isEmpty(this.state.data))) && (<DetailsPage data={this.state} url={this.state.data.url} id={this.state.data.id} state={this.state}
                title={this.state.title} description={this.state.description} director={this.state.director} age={this.state.age}
                openModal={this.openModal} closeModal={this.closeModal} onTitleChange={this.onTitleChange} onNameChange={this.onNameChange} onCompanyChange={this.onCompanyChange}
                onAgeChange={this.onAgeChange} onSaveClicked={this.onSaveClicked} isModalOpen={this.state.isModalOpen} />)
        );
    }
}

DetailsPageContainer.propTypes = {

}

const mapStateToProps = (store) => {
    return {
        state: store.homeReducer.data,
        detailData: store.homeReducer.detailData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetails: (data) => dispatch(getDetails(data)),
        postDataToServerAction: (data) => dispatch(postDataToServerAction(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPageContainer);