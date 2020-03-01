import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from 'redux/store'

import 'styles/index.scss';
import { userActions } from './redux/actions'

import App from './App';

store.dispatch(userActions.fetchUserData())

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);


