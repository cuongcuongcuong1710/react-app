import * as types from '../Common/ActionTypes';

export const getProductsAction = () => {
    return {
        type: types.GET_ALL_PRODUCTS
    }
}

export const addProductAction = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product
    }
}
//------------------------------------------------
export const removeProductAction = (id) => {
    return {
        type: types.REMOVE_PRODUCT,
        id
    }
}

export const removeProductSuccessAction = (id) => {
    return {
        type: types.REMOVE_SUCCEEDED,
        id
    }
}

//------------------------------------------------
export const selectedItemAction = (product) => {
    console.log('product in selectedItemAction: ', product);
    return {
        type: types.SELECTED_ITEM,
        product
    }
}

export const unSelectItemAction = () => {
    return {
        type: types.UNSELECT_ITEM,
    }
}

//------------------------------------------------
export const editProductAction = (updateProduct) => {
    return {
        type: types.EDIT_PRODUCT,
        updateProduct
    }
}

export const editProductSuccessAction = (updateProduct) => {
    return {
        type: types.EDIT_SUCCEEDED,
        updateProduct
    }
}

//------------------------------------------------
export const getProductAction = id => {
    return {
        type: types.GET_PRODUCT,
        id
    }
}

export const getProductSuccessAction = id => {
    return {
        type: types.GET_PRODUCT_SUCCEEDED,
        id
    }
}

export const getProductFaildAction = id => {
    return {
        type: types.GET_PRODUCT_FAILD,
        id
    }
}
//------------------------------------------------
export const toggleModal = () => {
    return {
        type: types.TOGGLE_MODAL
    }
}

export const closeModal = () => {
    return {
        type: types.CLOSE_MODAL
    }
}

export const openEditModal = () => {
    return {
        type: types.OPEN_MODAL
    }
}


// 2 action bên dưới không dispatch bởi người dùng mà bởi saga khi nhận được res từ phía server
// Action sent by Redux-Saga // action này redux-saga tự gửi
export const getSuccessAction = (receiveProducts) => {
    return {
        type: types.GET_SUCCESS,
        receiveProducts
    }
}
// res từ server trả về lỗi hoặc không có dữ liệu hoặc lỗi kết nối thì redux-saga sẽ dispath action 
export const getFaildAction = (error) => {
    return {
        type: types.GET_FAILD,
        error
    }
}

export const searchAction = (strSearch) => {
    return {
        type: types.SEARCH,
        strSearch
    }
}
