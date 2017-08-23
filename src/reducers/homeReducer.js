'use-strict'
import * as actions from '../common/actionTypes'

var initialState = {

    data: [],
    detailData: {},
    isLoading: false
}

function saveData(state, action) {
    return { ...state, data: action.data };
}

function saveDetail(state, action) {
    let state1 = { ...state, detailData: action.data }
    return state1;
}

function startLoading(state, action) {
    return { ...state, isLoading: true };
}

function stopLoading(state, action) {
    return { ...state, isLoading: false };
}
export default function homeReducer(state = initialState, action) {

    switch (action.type) {

        case actions.SAVE_DATA:
            return saveData(state, action);

        case actions.SAVE_DETAIL:
            return saveDetail(state, action);

        case actions.START_LOADING:
            return startLoading(state, action);

        case actions.STOP_LOADING:
            return stopLoading(state, action);


        default:
            return state;
    }
}