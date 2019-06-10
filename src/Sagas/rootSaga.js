// quản lý tất cả sagas được định nghĩa
// call effect: run a saga with param
// all: chạy nhiều saga cùng 1 thời điểm
// fork: non-blocking call, khi gửi saga tiếp theo thì saga cũ vẫn đang thực hiện và saga mới cũng sẽ thực hiện
import { all, fork } from 'redux-saga/effects';
import { watchGetProducts, watchAddNewProduct, watchRemoveProduct, watchEditProduct, watchGetProduct } from './productSagas';
import { watchLoginUser } from './LoginSaga';

export function* rootSaga(){
    //yield call(watchGetProducts);
    yield all([
        fork(watchGetProducts),
        fork(watchAddNewProduct),
        fork(watchRemoveProduct),
        fork(watchEditProduct),
        fork(watchLoginUser),
        fork(watchGetProduct)
    ]);
}