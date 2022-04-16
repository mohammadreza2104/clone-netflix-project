import React, {useState, useEffect} from 'react';
import axios from "./axios";
import "./row.css"


const base_url = "https://image.tmdb.org/t/p/original/"

const Row = ({title, fetchUrl}) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    console.log(movies)

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className="row_poster"
                        src={`${base_url}${movie.poster_path}`}
                        alt={movie.name}
                    />
                ))}

            </div>
        </div>
    );
};

export default Row;