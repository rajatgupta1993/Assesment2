import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/action';
import SearchResultsPage from "../components/SearchResultsPage";
import SearchResultSelector from '../selectors/SearchResultSelector'

const mapStateToProps = (store) => {
    return {
        getSearchQuery:(searchQuery) => SearchResultSelector(searchQuery,store)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchData())
    }
};

const SearchResultContainer = connect(mapStateToProps,mapDispatchToProps)(SearchResultsPage)

export default SearchResultContainer;