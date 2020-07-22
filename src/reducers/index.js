import { act } from "react-dom/test-utils"
import {ADD_MOVIE}  from '../actions';

const intialState = {
    list:[],
    favorites:[]
}
export default function movies(state = intialState,action){
    console.log("inside reducer");
    if(action.type==ADD_MOVIE){
        return {
            ... state,
            list:action.movies
        }
    }
    return state;
}