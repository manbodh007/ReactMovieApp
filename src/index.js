import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import './index.css';
import App from './Components/App';
import movies from './reducers';

const store = createStore(movies);
console.log('store',store);
console.log('state',store.getState());

store.dispatch({
  type:'ADD_MOVIE',
  movies:[{name:'ironman'}]
})

console.log('state',store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


