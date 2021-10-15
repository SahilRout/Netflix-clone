import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import './css/Row.css'
import { useHistory } from 'react-router';

const img_base = "https://image.tmdb.org/t/p/original"
function Row({ title, fetchURL, isLargeRow }) {
    const history = useHistory();
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            console.log(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL])

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img
                        onClick={() => history.push({ pathname: '/details', state: movie })}
                        key={movie.id}
                        className={`row_poster ${isLargeRow && "row_poster_large"}`} src={`${img_base}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row
