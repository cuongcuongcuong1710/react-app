import React from 'react';
import ReactDOM from 'react-dom';
import './indexxxxx.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
// import '../node_modules/semantic-ui-css/semantic.min.css'
//import '../node_modules/semantic-ui-css/semantic.min.css';
//import 'semantic-ui/dist/semantic.min.css';

//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//Redux-saga
import createSagaMidleware from 'redux-saga';
import { rootSaga } from './Sagas/rootSaga';

import myReducer from './Reducers';
//import HomeContainer from './Container/HomeContainer';

const sagaMidleWare = createSagaMidleware();
let store = createStore(myReducer, applyMiddleware(sagaMidleWare));

sagaMidleWare.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

    

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
