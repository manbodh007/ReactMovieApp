import React from 'react';
// import {data} from '../data';
import {connect} from 'react-redux';
import Navbar from './Navbar';
import MovieCart from './MovieCart';
import {showFavouriteMovies} from '../actions';
// import {storeContext} from '../index';
// import {connect} from '../index';

class App extends React.Component {

  componentDidMount(){
    const {store} = this.props; // store have {list,favorites}
    // store.subscribe(()=>{
    //   console.log('updated');
    //   this.forceUpdate();
    // })
  }

  isMovieFavourite = (movie)=>{
     const {movies} = this.props;
     let index = movies.favourites.indexOf(movie);
     if(index!=-1){
       return true;
     }
     return false;
  }
 
  showFavouriteMovie = (val)=>{
    const {favourites} = this.props;
    this.props.dispatch(showFavouriteMovies(val));
    console.log('favourites',favourites);
  }

  render(){
    console.log('props',this.props);
    const {movies,search} = this.props;
    const {list,favourites,showFavourites} = movies;
    const displayMovies = showFavourites?favourites:list;

    console.log('search',search);
    return (
      <div className="App">
        <Navbar />
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
                            // state = {this.props}
                            dispatch = {this.props.dispatch}
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

// class AppWrapper extends React.Component{
//   render(){
//     return(
//         <storeContext.Consumer>
//           {(store)=><App store = {store}/>}
//         </storeContext.Consumer>
//     )
//   }
// }

function mapStateToProps(state){
   return{
     movies:state.movies,
     search:state.search
   }
}

const connectedComponent = connect(mapStateToProps)(App)

export default connectedComponent;
