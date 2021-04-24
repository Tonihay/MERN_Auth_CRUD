import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux' // Provider is going to keep track of the store and we can access the state from anywhere
import {createStore , applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from'./reducers';
 import App from './App';


 const store = createStore(reducers , compose(applyMiddleware(thunk)))

 ReactDOM.render(
 <Provider store={store}>
     <App />
     </Provider>, 
     document.getElementById('root'));
