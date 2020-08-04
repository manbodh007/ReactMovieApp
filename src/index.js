import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import { data } from './data';
import App from './Components/App';
import rootReducers from './reducers';
import { addMovies } from './actions';
import thunk from 'redux-thunk';
import { createContext } from 'react';



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

const logger = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action !== 'function') {
    console.log('action type:', action.type);
  }

  next(action);
}

const store = createStore(rootReducers, applyMiddleware(logger, thunk));

store.dispatch(addMovies(data));

export const storeContext = createContext();

class Provider extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <storeContext.Provider value={store}>
        {this.props.children}
      </storeContext.Provider>
    )
  }
}


export function connect(callback) {
  return function (Component) {
    class ConnectedComponent extends React.Component {
      constructor(props) {
        // console.log("props",this.props);
        super(props);
        this.props.store.subscribe(() => {
          this.forceUpdate();
        });
      }

      render() {
        const { store } = this.props;
        const state = store.getState();
        const dataTobePassed = callback(state);
        return (< Component {...dataTobePassed} dispatch={store.dispatch} />);
      }
    }

    class connectedComponentWrapper extends React.Component {
      render() {
        return (<storeContext.Consumer>
          {(store) => {
            return <ConnectedComponent store={store} />;
          }}
        </storeContext.Consumer>);
      }
    }

    return connectedComponentWrapper;
  }
}


ReactDOM.render(

  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);


