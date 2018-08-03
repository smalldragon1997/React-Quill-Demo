import {call, put, takeEvery} from 'redux-saga/effects'
import * as Api from './Api';
import * as Actions from './Actions';
import * as ActionTypes from  './ActionTypes';

function* uploadContent(action) {
    // const data = yield call(Api.uploadContent, action.content);
    try{
        yield put(Actions.inputSuccess(action.content));
    }catch (e){
        console.log(e);
    }
    // console.log(123);
    // if (data) {
    //     yield put(Actions.inputSuccess(data));
    // } else {
    //     yield put(Actions.inputFailure("api upload fail"));
    // }
}

// 如果监听到Actions.inputUpdating操作 则使用uploadContent方法
export function* watchUploadContent() {
    yield takeEvery(ActionTypes.inputUpdating, uploadContent);
}
