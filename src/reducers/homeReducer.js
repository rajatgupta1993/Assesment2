
'use-strict'

var initialState = {

    data: [],
    detailData: {}
}

let tasks, filteredTasks;

function saveData(state, action) {

    return { ...state, data: action.data };
}
function saveDetail(state, action) {
    let state1 = { ...state, detailData: action.data }
    return state1;
}


export default function homeReducer(state = initialState, action) {


    switch (action.type) {

        case "SAVE_DATA":
            return saveData(state, action);

        case "SAVE_DETAIL":
            return saveDetail(state, action);

        default:
            return state;
    }
}