import React from 'react';
// import {data} from '../data';
import Navbar from './Navbar';
import MovieCart from './MovieCart';
import {showFavouriteMovies} from '../actions';

class App extends React.Component {

  componentDidMount(){
    const {store} = this.props; // store have {list,favorites}
    store.subscribe(()=>{
      console.log('updated');
      this.forceUpdate();
    })
  }

  isMovieFavourite = (movie)=>{
     const {movies} = this.props.store.getState();
     let index = movies.favourites.indexOf(movie);
     if(index!=-1){
       return true;
     }
     return false;
  }
 
  showFavouriteMovie = (val)=>{
    const {favourites} = this.props.store.getState();
    this.props.store.dispatch(showFavouriteMovies(val));
    console.log('favourites',favourites);
  }

  render(){
    const {movies,search} = this.props.store.getState();
    const {list,favourites,showFavourites} = movies;
    const displayMovies = showFavourites?favourites:list;

    console.log('search',search);
    return (
      <div className="App">
        <Navbar 
         store = {this.props.store}
         search = {search}
        />
         <div className="main"> 
             <div className="tabs">
               <div className = {`tab ${showFavourites?'':'active-tabs'}`} onClick = {()=>this.showFavouriteMovie(false)}>Movies</div>
               <div className = {`tab ${showFavourites?'active-tabs':''}`}  onClick = {()=>this.showFavouriteMovie(true)}>Favourites</div>
             </div>
             <div className='list'>
               {
                displayMovies.map((movie,index) =>{
                   return <MovieCart 
                            movie = {movie} 
                            key = {`movie-${index}`} 
                            store = {this.props.store}
                            isFavourite = {this.isMovieFavourite(movie)}
                            />
                      })
               }
             </div>
         </div>
         
      </div>
    );
  }
}

export default App;
