import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
    hasilLogin: 0
}

function reducer(state = initialState, action){
    switch (action.type){
        case 'Login':
            return {
                hasilLogin: action.value
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();
