import * as types from '../Common/ActionTypes';

const initialState = {
    token: ''
}

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SIGNIN_USER_SUCCESS:
            return {
                ...state,
                token: action.authUser
            }
        default:
            return state;
    }
}

export default loginReducer;