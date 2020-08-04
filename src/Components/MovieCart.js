import React from 'react';
import {addFavourites,removeFavourites} from '../actions';

import {connect} from 'react-redux';


class MovieCart extends React.Component {


handleFavoriteBtn = ()=>{
  const {movie} = this.props;
  this.props.dispatch(addFavourites(movie));
 
}
handleRemoveFavoriteBtn = ()=>{
  const {movie} = this.props;
  this.props.dispatch(removeFavourites(movie));
  
}


  render(){
      const {movie,isFavourite} = this.props;

    return (
        <div className="movie-card">
           <div className ='left'>
               <img alt = 'movie-poster' src={movie.Poster}/>
            </div> 
            <div className = 'right'>
                 <div className='title'>{movie.Title}</div>
                 <div className='plot'>{movie.Plot}</div>
                 <div className='footer'>
                      <div className = "rating">{movie.imdbRating}</div>
                      {
                        isFavourite?
                        <button className = "unfavourite-btn" onClick = {this.handleRemoveFavoriteBtn}>unFavourite</button>
                        :<button className = "favourite-btn" onClick = {this.handleFavoriteBtn}>Favourite</button>
                      }
                      
                 </div>
            </div>
        </div>
      );
  }
}

// function mapStateToProps(state){
//   return {
//      movie:
//   }
// }
// const connectedAppComponent = connect(mapStateToProps)(MovieCart);

export default MovieCart;
