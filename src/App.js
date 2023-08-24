import React, { useEffect,useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
const API_URL = 'http://www.omdbapi.com?apikey=d20a1988';

// const movie1 = {

//   "Title": "Spiderman and Grandma",
//   "Year": "2009",
//   "imdbID": "tt1433184",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"

// }

const App =()=> {
const[movies,setMovies] = useState([]); 
const[searchTerm,setsearchTerm]= useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('spiderman');
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className='search'>
        <input
          placeholder='Enter a movie to search'
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0 
        ? (  <div className='container'>
          {movies.map((movie)=>(
            <MovieCard movie={movie}/>
          ))}
        </div>
      ) :
      <div>
        <h2>No Movie Found</h2>
        </div>
      }

      {/* <div className="container">
        <MovieCard movie1={movie1}/>
      </div> */}
    </div>
  );
}

export default App;
