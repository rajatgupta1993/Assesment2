import sagaHelper from 'redux-saga-testing/main';
import { call, put } from 'redux-saga/effects';
import * as sagaMethods from '../sagas/saga';
import * as actionTypes from '../common/actionTypes';
import * as Api from '../common/api';

const startAction = () => ({ type: actionTypes.START_LOADING });
const stopAction = () => ({ type: actionTypes.STOP_LOADING });

describe('asyncActions:-load tiles data', () => {
    const it = sagaHelper(sagaMethods.fetchData());
    const expectedAction = () => ({ type: actionTypes.SAVE_DATA, data: undefined });
    it('should have dispatch action to start loading', (result) => {
        expect(result).toEqual(put(startAction()));
    });
    it('should have called the api', (result) => {
        expect(result).toEqual(call(Api.getAllData));
    });
     it('should have dispatch action to stop loading', (result) => {
        expect(result).toEqual(put(stopAction()));
    });
    it('and then trigger an action', (result) => {
        expect(result).toEqual(put(expectedAction()));
    });
});

describe('asyncActions:-get Tile Detail', () => {
    const action = {
        type: actionTypes.GET_DETAILS,
        data: 2
    }
    const it = sagaHelper(sagaMethods.getDetails(action));
    const expectedAction = () => ({ type: actionTypes.SAVE_DETAIL, data: undefined });
    it('should have dispatch action to start loading', (result) => {
        expect(result).toEqual(put(startAction()));
    });
    it('should have called the api ', (result) => {
        expect(result).toEqual(call(Api.getDetailsData, action.data));
    });
     it('should have dispatch action to stop loading', (result) => {
        expect(result).toEqual(put(stopAction()));
    });
    it('and then trigger an action', (result) => {
        expect(result).toEqual(put(expectedAction()));
    });
});

describe('asyncActions:-Post Data to Server', () => {
    const action = {
        type: actionTypes.POST_DATA,
        data: 2
    }
    const it = sagaHelper(sagaMethods.postDataToServer(action));
    it('should have dispatch action to start loading', (result) => {
        expect(result).toEqual(put(startAction()));
    });
    it('should have called the api', (result) => {
        expect(result).toEqual(call(Api.postAllData, action.data));
    });
     it('should have dispatch action to stop loading', (result) => {
        expect(result).toEqual(put(stopAction()));
    });
});
