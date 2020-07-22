import { act } from "react-dom/test-utils"
import {ADD_MOVIE,ADD_FAVOURITES,REMOVE_FAVOURITES,SHOW_FAVOURITES}  from '../actions';

const intialState = {
    list:[],
    favourites:[],
    showFavourites:false
}
export default function movies(state = intialState,action){
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
