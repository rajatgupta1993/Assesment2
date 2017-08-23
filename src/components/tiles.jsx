import React from 'react';
import { Link, } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Tiles extends React.Component {

    render() {
          const { id, onClick, url,title } = this.props;
        return (
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" key={id} onClick={onClick}>
                <div className="imageDiv">
                    <div className="movie-image">
                        <img src={url} alt="tile" />
                    </div>
                    <div className="movie-title"> {title} </div>
                </div>
            </div>
        );
    }
}

Tiles.propTypes = {
   id:PropTypes.number,
    url: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string
};
