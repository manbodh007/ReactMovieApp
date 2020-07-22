// {
//     type:'ADD_MOVIE',
//     movie: [m1,m2,m3]
// }
// {
//     type:'INCREASE_COUNT'
// }
export const ADD_MOVIE = 'ADD_MOVIES';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES';
export const SHOW_ALL_MOVIES = 'SHOW_ALL_MOVIES';
export const SHOW_FAVOURITES = 'SHOW_FAVOURITES'

export function addMovies(movies){
 return {
         type:ADD_MOVIE,
         movies:movies 
    }

}
export function addFavourites(movie){
    return {
            type:ADD_FAVOURITES,
            movie
       }
   }

export function removeFavourites(movie){
    return {
        type:REMOVE_FAVOURITES,
        movie
    }
}
export function showAllMovies(movies){
    return {
        type:SHOW_ALL_MOVIES,
        movies
    }
}

export function showFavouriteMovies(movies){
    return {
        type:SHOW_FAVOURITES,
        movies
    }
}

