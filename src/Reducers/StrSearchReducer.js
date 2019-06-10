import * as types from '../Common/ActionTypes';

const initialState = '';

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH:
            return action.strSearch;
        default:
            return state;
    }
}

export default searchReducer;