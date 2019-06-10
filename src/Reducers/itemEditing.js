import * as types from '../Common/ActionTypes';

const initialState = {
    id: '',
    name: '1',
    quantity: '1',
    price: '1',
    expired: '1'
};

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SELECTED_ITEM:
            return action.product;
        case types.UNSELECT_ITEM:
            return state;
        default:
            return state;
    }
}

export default myReducer;