import React from 'react';
import reactLogo from '../resources/reactLogo.png';
import { Link, } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchBox= (props) => {
    return (
       <div className="container marginTop marginBottom">
                        <div className="row">

                            <div id="custom-search-input">
                                <div className="input-group col-md-12" style={{ display: 'inline-flex' }} >
                                    <input type="text" className="form-control input-lg" placeholder="Search"
                                        value={props.searchText} onChange={props.onValueChange} />
                                    {(props.searchText === '') ? null :

                                        (<button type="button" onClick={props.onCrossClicked} className=" crossIcon" data-dismiss="modal">&times;</button>)}
                                    <span className="input-group-btn">
                                        <Link to={`/searchResults/${props.searchText}`}>
                                            <button className="btn btn-info btn-lg" type="button">
                                                <i className="glyphicon glyphicon-search" />
                                            </button>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
    );
};

SearchBox.propTypes = {
    searchText: PropTypes.string,
    onValueChange: PropTypes.func,
    onCrossClicked: PropTypes.func
};

export default SearchBox;