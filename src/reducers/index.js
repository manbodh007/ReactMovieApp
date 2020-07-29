import { act } from "react-dom/test-utils"
import {combineReducers} from 'redux';
import {
    ADD_MOVIE,
    ADD_FAVOURITES,
    REMOVE_FAVOURITES,
    SHOW_FAVOURITES
    }from '../actions';

const intialMovieState = {
    list:[],
    favourites:[],
    showFavourites:false
}
export function movies(state = intialMovieState,action){
    console.log("inside reducer");

    switch(action.type){
        case ADD_MOVIE:
            return{
                ...state,
                list:action.movies
            }
        case ADD_FAVOURITES:
            return {
                ...state,
                favourites:[action.movie, ...state.favourites]
            }
        case SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites:action.val
            }
            case REMOVE_FAVOURITES:
                let index = state.favourites.indexOf(action.movie);
                console.log('index',index);
                state.favourites.splice(index,1);
            return {
             ...state,
            } 
        default:
         return state
    }
}

const intailSearchState = {
    result:{

    }
}


export function search(state=intailSearchState,action){
   return state;
}

const intailRootreducer = {
    movies:intialMovieState,
    search:intailSearchState
}


// export default function rootReducer(state=intailRootreducer,action){
//     return {
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// }

export default combineReducers({
    movies,
    search
});