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
export const SHOW_FAVOURITES = 'SHOW_FAVOURITES';
export const ADD_TO_MOVIES_LIST = 'ADD_TO_MOVIES_LIST';
export const ADD_MOVIE_SEARCH_RESULT = 'ADD_MOVIE_SEARCH_RESULT'

export function addMovies(movies) {
    return {
        type: ADD_MOVIE,
        movies: movies
    }

}
export function addFavourites(movie) {
    return {
        type: ADD_FAVOURITES,
        movie
    }
}

export function removeFavourites(movie) {
    return {
        type: REMOVE_FAVOURITES,
        movie
    }
}

export function showFavouriteMovies(val) {
    return {
        type: SHOW_FAVOURITES,
        val
    }
}
export function handleAddToMovies(movie) {
    return {
        type: ADD_TO_MOVIES_LIST,
        movie
    }
}

export function handleMovieSearch(movie) {
    const url = `https://www.omdbapi.com/?apikey=28d5faf&t=${movie}`
    return function (dispatch) {
        fetch(url)
            .then(response => response.json())
            .then(movie => { 
                console.log(movie);
                dispatch(addMovieSearchResult(movie))
            });

    }
}

export function addMovieSearchResult(movie) {
    return {
        type: ADD_MOVIE_SEARCH_RESULT,
        movie
    }
}

