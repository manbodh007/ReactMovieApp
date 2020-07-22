import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import './index.css';
import {data} from './data';
import App from './Components/App';
import movies from './reducers';
import {addMovies} from './actions';

const store = createStore(movies);
console.log('store',store);
console.log('state',store.getState());

store.dispatch(addMovies(data));

console.log('state',store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);


