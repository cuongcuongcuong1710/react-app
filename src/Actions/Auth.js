import * as types from '../Common/ActionTypes';

export const userSigninAction = (userName, passWord) => {

    console.log('cong')
    return {
        type: types.SIGNIN_USER,
        userName,
        passWord
    }
}

export const userSigninSuccessAction = authUser => {
    return {
        type: types.SIGNIN_USER_SUCCESS,
        authUser
    }
}

export const userSignupAction = user => {
    return {
        type: types.SIGNUP_USER,
        user
    }
}

export const userSignupSuccessAction = authUser => {
    return {
        type: types.SIGNUP_USER_SUCCESS,
        authUser
    }
}

