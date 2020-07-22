import React from 'react';
// import {data} from '../data';
import Navbar from './Navbar';
import MovieCart from './MovieCart';
import {addMovies,showFavouriteMovies} from '../actions';



class App extends React.Component {

  componentDidMount(){
    const {store} = this.props; // store have {list,favorites}
    store.subscribe(()=>{
      console.log('updated');
      this.forceUpdate();
    })
  }

  isMovieFavourite = (movie)=>{
     const {favourites} = this.props.store.getState();
     let index = favourites.indexOf(movie);
     if(index!=-1){
       return true;
     }
     return false;
  }
  showAllMovies = ()=>{
    const {data} = this.props;
    this.props.store.dispatch(addMovies(data));
    
  }
  showFavouriteMovie = ()=>{
    const {favourites} = this.props.store.getState();
    this.props.store.dispatch(showFavouriteMovies(favourites));
    console.log('favourites',favourites);
  }

  render(){
    const { list }= this.props.store.getState();
    console.log('app render');
    return (
      <div className="App">
        <Navbar />
         <div className="main"> 
             <div className="tabs">
               <div className="tab" onClick={this.showAllMovies}>Movies</div>
               <div className="tab" onClick = {this.showFavouriteMovie}>Favourites</div>
             </div>
             <div className='list'>
               {
                list.map((movie,index) =>{
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
