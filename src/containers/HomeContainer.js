import React from 'react'
import { connect } from 'react-redux';
import { fetchData } from '../actions/action';
import PropTypes from 'prop-types';
import Home from "../components/home";

class HomeContainer extends React.Component {


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

        //  this.getData();
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
            <Home data={this.props.state} searchText={this.state.searchText} onValueChange={this.onValueChange}
                onTileClicked={this.onTileClicked} onCrossClicked={this.onCrossClicked} />
        );
    }
}

HomeContainer.propTypes = {

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);