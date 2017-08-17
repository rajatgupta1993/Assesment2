import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/action';
import '../css/styles.css';
import { Link, } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchResultsPage from "../components/SearchResultsPage";

class SearchResultContainer extends React.Component {

    constructor(props) {
        super(props);

    }

    componentWillMount() {

        //  this.getData();
        this.props.fetchData();
    }


    render() {
       
        console.log(this.props.match.params.query);
        return (
            <SearchResultsPage data={this.props.state} query={this.props.match.params.query} />
        );
    }
}

SearchResultContainer.propTypes = {

}

const mapStateToProps = (store) => {
    return {
        state: store.homeReducer.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchData())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultContainer);