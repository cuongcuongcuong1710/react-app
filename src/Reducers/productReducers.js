import * as types from '../Common/ActionTypes';


// let myReducer = async (state = initialState, action) => {
//     switch (action.type) {
//         case types.GET_ALL_PRODUCTS:
//             const data = await getAllProducts();
//             return {
//                 ...state,
//                 products: data
//             }
//         default: return state;
//     }
// }

// reducer là function thay đổi state
// let data = getAllProducts();
// console.log(data);

const initialState = [];

const productReducers = (state = initialState, action) => {
    switch (action.type) {

        case types.GET_SUCCESS:
            return action.receivedProducts;

        case types.GET_FAILD:
            console.log('reducer get-faild');
            return [];

        // case types.ADD_PRODUCT:
        //     console.log('log action of types.ADD_Product in reducer', action);
        //     return [
        //         ...state,
        //         action.product
        //     ];

        // case types.GET_ALL_PRODUCTS:
        //     console.log('reducer GET_ALL_PRODUCTS', state);
        //     return {
        //         ...state,
        //         data: action.data
        //     }

        // case types.LOAD_PRODUCTS:
        //     console.log('reducer LOAD_PRODUCTS');
        //     return {
        //         ...state,
        //         data: action.data
        //     }

        case types.EDIT_SUCCEEDED:
            return state.map(eachProduct => 
                (eachProduct.id === action.updateProduct.id) 
                    ? { ...eachProduct,
                        name: action.updateProduct.name,
                        quantity: action.updateProduct.quantity,
                        price: action.updateProduct.price,
                        expired: action.updateProduct.expired
                    }
                    : eachProduct
                )
        case types.REMOVE_SUCCEEDED:
            const filteredProducts = state.filter(eachProduct => {
                return eachProduct.id !== action.id;
            })
            return filteredProducts;
            
        default:
            return state;
    }
}

export default productReducers;