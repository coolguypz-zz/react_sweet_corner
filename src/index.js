import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import { createStore,applyMiddleware,compose } from 'redux';
import thunk from './middleware/thunk'
import rootReducer from './reducers';



const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));
ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <App />
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);
