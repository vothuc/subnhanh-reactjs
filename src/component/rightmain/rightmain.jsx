import React, { useState, useEffect } from 'react';
import SearchBox from '../../searchbox/searchbox';
import './rightmain.scss';

const Rightmain = () => {
  const [movies, setMovies] = useState([]);

	const getMovieRequest = async () => {
		const url = `http://www.omdbapi.com/?s=star wars&apikey=263d22d8`;
		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest();
	}, []);
  return (
    <div className='rightmain'>

      <div className="search">
        <SearchBox/>
        <button className='button'> Tìm Kiếm </button>
      </div>

      <div className="leftContainer">
        <div className="heading-secondary">
              <span>PHIM LẺ HOT</span>
        </div>
        <div className="container">
        {
          movies.slice(0,5).map((movie,index) =>(
              <div className="box" key={movie.imdbID}>
                  <div className="image">
                    <img src={movie.Poster} alt="" />
                  </div>
                  <div className="content">
                    <a href="" className="film-link">{movie.Title}</a>
                  </div>
              </div>
           ))
        }
        </div>

        <div className="heading-secondary">
              <span>PHIM BỘ HOT</span>
        </div>
        <div className="container">
        {
          movies.slice(0,5).map((movie,index) =>(
               <div className="box" key={movie.imdbID}>
                  <div className="image">
                    <img src={movie.Poster} alt="" />
                  </div>
                  <div className="content">
                    <a href="" className="film-link">{movie.Title}</a>
                  </div>
              </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Rightmain