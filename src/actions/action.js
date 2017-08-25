import * as actions from '../common/actionTypes';

export function fetchData() {
    return {
        type: actions.FETCH_DATA,
    };
}
export function saveData(data) {
    return {
        type: actions.SAVE_DATA,
        data: data,
    };
}

export function getDetails(id) {

    return {
        type: actions.GET_DETAILS,
        data: id,
    };
}

export function saveDetail(data) {
    return {
        type: actions.SAVE_DETAIL,
        data: data,
    };
}

export function postDataToServerAction(data) {

    return {
        type: actions.POST_DATA,
        data: data,
    };
}

export function startLoading(){
    return {
        type: actions.START_LOADING,
    };
}

export function stopLoading(){
    return {
        type: actions.STOP_LOADING,
    };
}
