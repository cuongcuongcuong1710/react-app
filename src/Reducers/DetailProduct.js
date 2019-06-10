import * as types from '../Common/ActionTypes';
const initialState = {
    id: '',
    name: '',
    quantity: '',
    price: '',
    expired: ''
};

const detailProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCT_SUCCEEDED:
            return action.receivedProduct;
        default:
            return state;
    }
}

export default detailProductReducer;