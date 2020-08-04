import React from 'react';
import { handleMovieSearch,handleAddToMovies } from '../actions';
import { movies } from '../reducers';
import {storeContext} from '../index';

class Navbar extends React.Component {

  handleAddToMovies = (movie) => {
    this.props.store.dispatch(handleAddToMovies(movie));
  }

  handleSearch = () => {
    const { searchText } = this.state;
    this.props.store.dispatch(handleMovieSearch(searchText));
  }


  handleChange = (e) => {
    this.setState({
      searchText: e.target.value
    });
  }
  render() {
    
    const { showSearchResult, result:movie} = this.props.search;
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button id='search-btn' onClick={this.handleSearch}>search</button>

          {showSearchResult &&
            <div className='search-results'>
              <div className='search-result'>

                <img src={movie.Poster} alt='movie' />

                <div className='movie-info'>
                  <span>{movie.Title}</span>
                  <button onClick={() => this.handleAddToMovies(movie)}>Add to Movies</button>
                </div>

              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}
class NavbarWrapper extends React.Component{
   render(){
     return(
          <storeContext.Consumer>
            {(store)=> <Navbar store={store} search = {this.props.search}/>}
          </storeContext.Consumer>
     );
   }
}

export default NavbarWrapper;
