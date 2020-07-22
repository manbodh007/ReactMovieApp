// {
//     type:'ADD_MOVIE',
//     movie: [m1,m2,m3]
// }
// {
//     type:'INCREASE_COUNT'
// }
export const ADD_MOVIE = 'ADD_MOVIES';

export function addMovies(movies){
 return {
         type:ADD_MOVIE,
         movies:movies 
    }

}