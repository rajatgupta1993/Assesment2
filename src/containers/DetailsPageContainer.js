import React from 'react';
import { connect } from 'react-redux';
import { getDetails, postDataToServerAction } from '../actions/action';
import DetailsPage from '../components/DetailsPage';

const mapStateToProps = (store) => {
    return {
        state: store.homeReducer.data,
        detailData: store.homeReducer.detailData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getDetails: (data) => dispatch(getDetails(data)),
        postDataToServerAction: (data) => dispatch(postDataToServerAction(data)),
    };
};

const DetailsPageContainer = connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
export default DetailsPageContainer;
