import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import  RootReducer from './reducers';

import {createStore} from 'redux';
import {addCharacterById} from './actions';

import {BrowserRouter}  from "react-router-dom";




const store =createStore(RootReducer);
console.log(store.getState());
store.subscribe(()=> console.log(store.getState()));
store.dispatch(addCharacterById(28));


ReactDOM.render(
    <BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));
