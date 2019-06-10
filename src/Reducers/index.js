import { combineReducers } from 'redux';
import productReducers from './productReducers';
import toggleModal from './toggleModal';
import itemEditing from './itemEditing';
import loginReducer from './LoginReducer';
import detailProductReducer from './DetailProduct';
import searchReducer from './StrSearchReducer';

const myReducer = combineReducers({
    productReducers,
    toggleModal,
    itemEditing,
    loginReducer,
    detailProductReducer,
    searchReducer
})

export default myReducer;