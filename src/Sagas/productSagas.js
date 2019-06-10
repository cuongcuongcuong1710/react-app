import * as types from '../Common/ActionTypes';
// dùng effects trong redux-saga để dispatch actions
import { put, takeLatest } from 'redux-saga/effects';
// put: dispatch actions với các action là input params
// takeLatest: watch action change, but only do latest action
import { Api } from '../Api/products';
import history from '../history';
import { Redirect } from 'react-router-dom';


function* getProducts() {
    try {

        const receivedProducts = yield Api.getAllProducts();
        yield put({ type: types.GET_SUCCESS, receivedProducts })

    } catch (error) {
        yield put({ type: types.GET_FAILD, error })
    }
}

export function* watchGetProducts() {
    yield takeLatest(types.GET_ALL_PRODUCTS, getProducts);
}

// function* addNewProduct(action) {
//     try {
//         const result = yield Api.insertProducts(action.product);
//         console.log('result-----------------------', result);
//         if (result === 200) {
//             yield put({ type: types.GET_ALL_PRODUCTS }); // Ngầm thực hiện getall để refesh lại list
//         }
//     } catch (error) {
//         console.log('error', {error} );
//         // do nothing
//     }
// }

// function addNewProduct(action) {
//         Api.insertProducts(action.product).then(response => {
//             if(response === 200) {
//                 console.log('200');
//                 put({ type: types.GET_ALL_PRODUCTS }); // Ngầm thực hiện getall để refesh lại list
//             }
//             // if(response === 401) {
//             //     console.log('401');
//             //     put({type: types.SIGNIN_USER })
//             // }
//         }).catch(error => {
//             console.log('error',error);
//         })
// }
function* addNewProduct(action) {
    try {
        const status = yield Api.insertProducts(action.product);
        if (status === 200) {
            yield put({ type: types.GET_ALL_PRODUCTS });
        }
        if (status === 401) {
            console.log('lỗi 401');
            //yield put({type: types.SIGNIN_USER});
            history.replace('/login');
        }
    } catch (error) {
        console.log('error', error);
    }

    // .then(response => {
    //     if(response === 200) {
    //         console.log('200');
    //         put({ type: types.GET_ALL_PRODUCTS }); // Ngầm thực hiện getall để refesh lại list
    //     }
    //     // if(response === 401) {
    //     //     console.log('401');
    //     //     put({type: types.SIGNIN_USER })
    //     // }
    // }).catch(error => {
    //     console.log('error',error);
    // })
}

export function* watchAddNewProduct() {
    yield takeLatest(types.ADD_PRODUCT, addNewProduct);
}

function* removeProduct(action) {
    try {
        const result = yield Api.removeProduct(action.id);
        if (result === true) {
            yield put({ type: types.REMOVE_SUCCEEDED, id: action.id });
        }
    } catch (error) {

    }
}

export function* watchRemoveProduct() {
    yield takeLatest(types.REMOVE_PRODUCT, removeProduct);
}

function* editProduct(action) {
    try {
        const result = yield Api.editProduct(action.updateProduct);
        if (result === true) {
            yield put({ type: types.EDIT_SUCCEEDED, updateProduct: action.updateProduct });
        }
    } catch (error) {

    }
}

export function* watchEditProduct() {
    yield takeLatest(types.EDIT_PRODUCT, editProduct);
}

function* getProduct(action) {
    try {
        const receivedProduct = yield Api.getProduct(action.id);
        yield put({ type: types.GET_PRODUCT_SUCCEEDED, receivedProduct });
    } catch (error) {

    }
}

export function* watchGetProduct() {
    yield takeLatest(types.GET_PRODUCT, getProduct);
}



// theo dỏi sự thay đổi cuối cùng with takeLatest
