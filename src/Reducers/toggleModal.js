import * as types from '../Common/ActionTypes';

const initialState = false;

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_MODAL:
            return !state;
        case types.OPEN_MODAL:
            return true;
        case types.CLOSE_MODAL:
            return false;
        default:
            return state;
    }
}

export default myReducer;