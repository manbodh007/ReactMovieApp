import React from 'react';
// import {data} from '../data';
import Navbar from './Navbar';
import MovieCart from './MovieCart';



function App(props) {
  const {list} = props.store.getState(); // store have {list,favorites}
  return (
    <div className="App">
      <Navbar />
       <div className="main"> 
           <div className="tabs">
             <div className="tab">Movies</div>
             <div className="tab">Favourites</div>
           </div>
           <div className='list'>
             {
              list.map((movie,index) =>{
                 return <MovieCart movie = {movie} key = {`movie-${index}`}/>
               })
             }
           </div>
       </div>
       
    </div>
  );
}

export default App;
