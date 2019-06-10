import axios from 'axios';
import { accessToken } from '../Common/constants'

const instance = axios.create({
    baseURL: 'http://18.217.81.139:3000',
    timeout: 1000,
    headers: { 'authorization': localStorage.getItem('accessToken') }
});

function* getAllProducts() {
    const products = yield instance.get('/products/all')
    const { data } = products;
    return data;
};

// function* insertProducts(newProduct){
//     const response = yield instance.post(`/products/create`, {
//         name: newProduct.name,
//         quantity: newProduct.quantity,
//         price: newProduct.price,
//         expired: newProduct.expired
//     });
//     return yield (response.status === 200);
// }

function* insertProducts(newProduct) {
    let status = null;
    try {
        const response = yield instance.post(`/products/create`, {
            name: newProduct.name,
            quantity: newProduct.quantity,
            price: newProduct.price,
            expired: newProduct.expired
        });
        status = response.status;
        return status;
    } catch (error) {
        status = error.response.status;
        return status;
    }

}


function* removeProduct(id) {
    const response = yield instance.delete(`/products/${id}`);
    return yield (response.status === 200);
}

function* editProduct(updateProduct) {
    const response = yield instance.put(`/products/${updateProduct.id}`, {
        name: updateProduct.name,
        quantity: updateProduct.quantity,
        price: updateProduct.price,
        expired: updateProduct.expired
    });
    return yield (response.status === 200);
}

function* getProduct(id) {
    console.log('đã vào api getProduct');
    let status = null;
    try {
        
        const product = yield instance.get(`/products/${id}`);
        const { data } = product;
        console.log("data-----------", data);
        return data;
    } catch (error) {
        // status = error.response.status;
        // return status;
    }

}

export const Api = {
    getAllProducts,
    insertProducts,
    removeProduct,
    editProduct,
    getProduct
}