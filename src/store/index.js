

import {createStore,applyMiddleware, compose } from 'redux'
import reducers from '../reducers'


import thunk from 'redux-thunk';
const initialState ={
  city:'Buenos aires, ar'
};


/*
export const store = createStore(
    city,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  ;*/



  const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  export const store = createStore(
    reducers,
    initialState,
     composeEnhancers(applyMiddleware(thunk))
    )
  ;