import React from 'react';
import Tile from './tiles';
import '../css/styles.css';
import { Link, } from 'react-router-dom';
import SearchBox from './SearchBox'

export default class home extends React.Component {

    render() {
        return (
            (this.props.data.length > 0) && (
                <div className="home-container">
                    <SearchBox searchText={this.props.searchText} onValueChange={this.props.onValueChange} onCrossClicked={this.props.onCrossClicked} />

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