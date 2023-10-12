import React from "react";
import {useState} from "react"
import { useEffect } from "react";
import './App.css';
import searchIcon from './search.svg';
import MovieCard from "./moviecard";
//ea9ab0bc
const pelicula = {
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}
const API_URL = 'https://www.omdbapi.com?apikey=ea9ab0bc';


const APP = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        searchMovie('Batman');
    },[]);
    const searchMovie= async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        
        setMovies(data.Search);
    };

    return(
        <div className="app"> 
            <h1>CinemaWiki</h1>

            <div className="search"> 
                <input 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar por nombre "
                />
                <img 
                    src={searchIcon} 
                    alt="Search" 
                    onClick={() => searchMovie(searchTerm)}

                />
            </div>

            {movies?.length > 0
                ?(
                <div className="container">
                    {movies.map((movie)=>(
                        < MovieCard movie ={movie}/>
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No se Econtraron peliculas </h2>
                </div>
                )}

        </div>
    );
}
export default APP;