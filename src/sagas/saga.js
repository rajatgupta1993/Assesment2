import react from "react";
import { delay } from "redux-saga";
import { call, put, takeEvery, takeLatest, all, race } from "redux-saga/effects";
import { saveData, saveDetail } from "../actions/action"
import * as actions from '../common/actionTypes'
import * as api from '../common/api'

export function* fetchData() {

    var data = yield call(api.getAllData);
    yield put(saveData(data));
}

export function* getDetails(action) {
    var data = yield call(api.getDetailsData, action.data);
    yield put(saveDetail(data));
}

export function* postDataToServer(action) {
    var data = yield call(api.postAllData, action.data);
}

// export function getAllData() {
//     const url = "http://localhost:3000/home";
//     return fetch(url)
//         .then((resp) => resp.json()) // Transform the data into json
//         .then((dataFromServer) => {
//             return dataFromServer;
//         }).catch(function (error) {
//             //TODO Handle Error 
//         });
// }

// export function getDetailsData() {

//     let id = arguments[0];
//     const url = "http://localhost:3000/details/" + id;
//     return fetch(url)
//         .then((resp) => resp.json()) // Transform the data into json
//         .then((dataFromServer) => {
//             return dataFromServer;
//         }).catch(function (error) {
//             //TODO Handle Error 
//         });
// }

// export function postAllData() {

//     let reqObj = arguments[0];
//     const url = "http://localhost:3000/update";
//     return fetch(url, reqObj)
//         .then((resp) => resp.json())
//         .then((dataFromServer) => {
//             return dataFromServer;
//         }).catch(function (error) {
//             //TODO Handle Error
//         });
// }

export function* watchActions() {
    // yield takeEvery(actionTypes.INCREMENT_ASYNC, incrementAsync);
    yield takeEvery(actions.FETCH_DATA, fetchData);
    yield takeEvery(actions.GET_DETAILS, getDetails);
    yield takeEvery(actions.POST_DATA, postDataToServer);
}

export default function* rootSaga() {
    yield all([
        watchActions(),
    ]);
}