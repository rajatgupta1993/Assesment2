import React from 'react'
import { connect } from 'react-redux';
import { fetchData } from '../actions/action';
import Home from "../components/home";

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

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeContainer;
