import React from 'react';
import Tile from './tiles';
import '../css/styles.css';
import { Link, } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class SearchResultsPage extends React.Component {

    componentWillMount() {

        this.props.fetchData();
    }

    render() {

       // let displayData = (this.props.state.length > 0) ? this.props.state.filter((item) => item.title.toUpperCase().indexOf(this.props.match.params.query.toUpperCase()) !== -1) : null;
       let displayData = this.props.getSearchQuery(this.props.match.params.query); 
        return (
            (displayData !== null) && (<div className="searchResultDiv">
                {displayData.map((item) => <Tile key={item.id} id={item.id} url={item.url} title={item.title} />)}
            </div>)
        );
    }
}

SearchResultsPage.propTypes = {
    match: PropTypes.object,
    params: PropTypes.object,
    query: PropTypes.string
};
