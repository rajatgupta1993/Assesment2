import React from 'react';
import Tile from './tiles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class SearchResultsPage extends React.Component {

    componentWillMount() {

        this.props.fetchData();
    }

    render() {
        const { getSearchQuery } = this.props;
        let displayData = getSearchQuery(this.props.match.params.query);

        return (
            <div className="padding">   
           {( displayData !== null && displayData.length>0) ? (<div className="searchResultDiv">
                {displayData.map((item) => <Tile key={item.id} id={item.id} url={item.url} title={item.title} />)}
            </div>) :
                (<div className="no-data">
                    <img src="http://localhost:3000/noData.jpg" />
                    <p className="no-data-text">NO DATA AVAILABLE </p></div>)}
        </div>);
    }
}

SearchResultsPage.propTypes = {
    match: PropTypes.object,
    params: PropTypes.object,
    query: PropTypes.string,
};
