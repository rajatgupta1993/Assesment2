'use-strict'
import * as actions from '../common/actionTypes'

var initialState = {

    data: [],
    detailData: {},
    isLoading:false
}

function saveData(state, action) {
    return { ...state, data: action.data };
}

function saveDetail(state, action) {
    let state1 = { ...state, detailData: action.data }
    return state1;
}

export default function homeReducer(state = initialState, action) {

    switch (action.type) {

        case actions.SAVE_DATA:
            return saveData(state, action);

        case actions.SAVE_DETAIL:
            return saveDetail(state, action);

        default:
            return state;
    }
}