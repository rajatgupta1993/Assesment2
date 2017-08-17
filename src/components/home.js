import React from 'react';
import Tile from './tiles';
import '../css/styles.css';
import { Link, } from 'react-router-dom';

export default class home extends React.Component {

    render() {
        return (
            (this.props.data.length > 0) && (
                <div className="home-container">

                    <div className="container marginTop marginBottom">
                        <div className="row">

                            <div id="custom-search-input">
                                <div className="input-group col-md-12" style={{ display: 'inline-flex' }} >
                                    <input type="text" className="form-control input-lg" placeholder="Search"
                                        value={this.props.searchText} onChange={this.props.onValueChange} />
                                    {(this.props.searchText === '') ? null :

                                        (<button type="button" onClick={this.props.onCrossClicked} className=" crossIcon" data-dismiss="modal">&times;</button>)}
                                    <span className="input-group-btn">
                                        <Link to={`/searchResults/${this.props.searchText}`}>
                                            <button className="btn btn-info btn-lg" type="button">
                                                <i className="glyphicon glyphicon-search" />
                                            </button>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        {this.props.data.map((item) => <Link key={item.id} to={`/details/${item.id}`}>
                            <Tile key1={item.id} url={item.url} title={item.title} id={item.id}
                                onClick={this.props.onTileClicked} />
                        </Link>
                        )}
                    </div>
                </div>)
        );
    }
}