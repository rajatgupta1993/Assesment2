import react from "react";
import { delay } from "redux-saga";
import { call, put, takeEvery, takeLatest, all, race } from "redux-saga/effects";
import { saveData, saveDetail } from "../actions/action"


function* fetchData() {

    var data = yield call(getAllData);
    console.log('data', data);
    yield put(saveData(data));

}

function* getDetails(action) {
    var data = yield call(getDetailsData, action.data);
    console.log('data2', data);
    yield put(saveDetail(data));

}

function* postDataToServer(action) {
    var data = yield call(postAllData, action.data);
    console.log('data3', data);

}

function getAllData() {
    const url = "http://localhost:3000/home";
    return fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then((dataFromServer) => {
            return dataFromServer;
        }).catch(function (error) {
            //TODO Handle Error 
        });
}

function getDetailsData() {

    let id = arguments[0];
    const url = "http://localhost:3000/details/" + id;
    return fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then((dataFromServer) => {
            return dataFromServer;
        }).catch(function (error) {
            //TODO Handle Error 
        });
}

function postAllData() {

    let reqObj = arguments[0];
    const url = "http://localhost:3000/update";
    return fetch(url, reqObj)
        .then((resp) => resp.json())
        .then((dataFromServer) => {
            return dataFromServer;
        }).catch(function (error) {
            //TODO Handle Error
        });

}

export function* watchActions() {
    // yield takeEvery(actionTypes.INCREMENT_ASYNC, incrementAsync);
    yield takeEvery("FETCH_DATA", fetchData);
    yield takeEvery("GET_DETAILS", getDetails);
    yield takeEvery("POST_DATA", postDataToServer);
}

export default function* rootSaga() {
    yield all([
        watchActions(),
    ]);
}