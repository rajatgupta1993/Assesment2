import react from "react";
import { delay } from "redux-saga";
import { call, put, takeEvery, takeLatest, all, race } from "redux-saga/effects";
import { saveData, saveDetail, startLoading, stopLoading } from "../actions/action";
import * as actions from '../common/actionTypes';
import * as api from '../common/api';

export function* fetchData() {
  yield put(startLoading());
  let data = yield call(api.getAllData);
  yield put(stopLoading());
  yield put(saveData(data));
}

export function* getDetails(action) {
  yield put(startLoading());
  let data = yield call(api.getDetailsData, action.data);
  yield put(stopLoading());
  yield put(saveDetail(data));
}

export function* postDataToServer(action) {
  yield put(startLoading());
  let data = yield call(api.postAllData, action.data);
  yield put(stopLoading());
}

export function* watchActions() {
  yield takeEvery(actions.FETCH_DATA, fetchData);
  yield takeEvery(actions.GET_DETAILS, getDetails);
  yield takeEvery(actions.POST_DATA, postDataToServer);
}

export default function* rootSaga() {
  yield all([
    watchActions(),
  ]);
}
