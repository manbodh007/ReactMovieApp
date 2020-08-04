
import {combineReducers} from 'redux';
import {
    ADD_MOVIE,
    ADD_FAVOURITES,
    REMOVE_FAVOURITES,
    SHOW_FAVOURITES,
    ADD_TO_MOVIES_LIST,
    ADD_MOVIE_SEARCH_RESULT
    }from '../actions';

const intialMovieState = {
    list:[],
    favourites:[],
    showFavourites:false
}
export function movies(state = intialMovieState,action){
    console.log("inside movie reducer");

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
        case ADD_TO_MOVIES_LIST:
                return{
                    ...state,
                    list:[action.movie, ...state.list],
            }
        
        default:
         return state
    }
}

const intailSearchState = {
    result:{},
    showSearchResult:false
}




export function search(state=intailSearchState,action){

    console.log("inside search reducer");

   switch(action.type){
       case ADD_MOVIE_SEARCH_RESULT:
         return{
            ...state,
            result:action.movie,
            showSearchResult:true
         }
        case ADD_TO_MOVIES_LIST:
            return{
                ...state,
                showSearchResult:false
        }
        
        default:
          return state
   }
}
export default combineReducers({
    movies,
    search
});

// const intailRootreducer = {
//     movies:intialMovieState,
//     search:intailSearchState
// }


// export default function rootReducer(state=intailRootreducer,action){
//     return {
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// }

