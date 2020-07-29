import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import './index.css';
import {data} from './data';
import App from './Components/App';
import rootReducer from './reducers';
import {addMovies} from './actions';
import thunk from 'redux-thunk';



// logger(logs)(next)(action)
// logger(logs) logs has to property dispatch and getState
// const logger = function({dispatch,getState}){
//   return function(next){
//     return function(action){
//       console.log('action type =',action.type);
//       next(action);
//     }
//   }
// }

const logger =({dispatch,getState})=>(next)=>(action)=>{
  if(typeof action !== 'function'){
    console.log('action type:',action.type);
  }

  next(action);
}

const store = createStore(rootReducer,applyMiddleware(logger,thunk));

console.log('store',store);
console.log('state',store.getState());

store.dispatch(addMovies(data));

console.log('state',store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store} data = {data}/>
  </React.StrictMode>,
  document.getElementById('root')
);


