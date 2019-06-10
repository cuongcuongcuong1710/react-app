import * as types from '../Common/ActionTypes';
import { put, takeLatest } from 'redux-saga/effects';
import * as Api  from '../Api/Auth';

function* loginUser(userName, passWord){
    try {

        console.log('saga');
        const authUser = yield Api.userLogin(userName, passWord);
        console.log('saukhicallapi');
        console.log('token:', authUser);
        localStorage.setItem('accessToken', authUser);
        yield put({
            type: types.SIGNIN_USER_SUCCESS,
            authUser
        });
    } catch (error) {
        
    }
}

export function* watchLoginUser (){
    yield takeLatest(types.SIGNIN_USER, loginUser);
}
