import React from 'react';
import Tile from './tiles';
import '../css/styles.css';
import { Link, } from 'react-router-dom';
import SearchBox from './SearchBox'
import PropTypes from 'prop-types'

export default class home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: '',
        };

        this.onValueChange = this.onValueChange.bind(this);
        this.onTileClicked = this.onTileClicked.bind(this);
        this.onCrossClicked = this.onCrossClicked.bind(this);
    }

    componentWillMount() {
        this.props.fetchData();
    }

    onValueChange(e) {
        this.setState({
            searchText: e.target.value,
            tileId: '2'
        });
    }

    onTileClicked(e) {
        this.setState({
            tileId: e.target.getAttribute("id")
        });
    }

    onCrossClicked() {
        this.setState({
            searchText: ''
        });
    }
    render() {
        return (
            (this.props.state.length > 0) && (
                <div className="home-container">
                    <SearchBox searchText={this.state.searchText} onValueChange={this.onValueChange} onCrossClicked={this.onCrossClicked} />

                    <div className="container">
                        {this.props.state.map((item) => <Link key={item.id} to={`/details/${item.id}`}>
                            <Tile key1={item.id} url={item.url} title={item.title} id={item.id}
                                onClick={this.onTileClicked} />
                        </Link>
                        )}
                    </div>
                </div>)
        );
    }
}

home.PropTypes={
    state: PropTypes.array,
    fetchData:PropTypes.func
}