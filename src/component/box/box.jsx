import React, { useState, useEffect } from 'react';
import './box.scss';

const Box = () => {

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
    <div className='box'>
        {
            movies.slice(0,8).map((movie,index) =>(
                <div className="box-container" key={movie.imdbID}>
                    <div className="image">
                        <img src={movie.Poster} alt="" />
                    </div>
                    <div className="content">
                            <a href="" className="film-link">{movie.Title}</a>
                            <div className="price">
                                <i className="fa-solid fa-tag"></i> 
                                <span>{movie.Type}</span>
                            </div>
                        </div>
                 </div>
            ))
        }
    </div>
  )
}

export default Box